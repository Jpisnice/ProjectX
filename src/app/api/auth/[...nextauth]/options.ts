import { connect } from "@/database/mysql.config";
import Credentials from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { AuthOptions, ISODateString, User } from "next-auth";
import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";
import { CustomUser, CustomSession } from "@/types/customTypes";

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/login",
  },

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const connection = await mysql.createConnection({
        host: process.env.MYSQL_HOST!,
        user: process.env.MYSQL_USER!,
        password: process.env.MYSQL_PASSWORD!,
        database: process.env.MYSQL_DATABASE!,
      });

      try {
        // Check if the user already exists
        const [rows] = await connection.execute(
          'SELECT * FROM User WHERE email = ?',
          [user.email]
        );

        if ((rows as any[]).length > 0) {
          return true;
        }

        // Create a new user
        await connection.execute(
          'INSERT INTO User (email, role) VALUES (?, ?)',
          [user.email, 'User']
        );

        return true;
      } catch (error) {
        console.log("The error is ", error);
        return false;
      } finally {
        await connection.end();
      }
    },

    async jwt({ token, user }) {
      if (user) {
        token.user = user as CustomUser;
      }
      return token;
    },

    async session({ session, token }) {
      session.user = token.user as CustomUser;
      return session;
    },
  },

  providers: [
    Credentials({
      name: "Welcome Back",
      type: "credentials",

      credentials: {
        wardNumber: {
          label: "Ward Number",
          type: "number"
        },
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email"
        },
        password: {
          label: "Password",
          type: "password"
        }
      },

      async authorize(credentials) {
        const connection = await mysql.createConnection({
          host: process.env.MYSQL_HOST!,
          user: process.env.MYSQL_USER!,
          password: process.env.MYSQL_PASSWORD!,
          database: process.env.MYSQL_DATABASE!,
        });

        try {
          // Fetch user from the database
          const [rows] = await connection.execute(
            'SELECT * FROM User WHERE email = ?',
            [credentials?.email]
          );

          const user = (rows as any[])[0];

          if (user && bcrypt.compareSync(credentials?.password!, user.password)) {
            return user;
          } else {
            return null;
          }
        } catch (error) {
          console.log("Authorization error: ", error);
          return null;
        } finally {
          await connection.end();
        }
      },
    }),

    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    // ...add more providers here
  ],
};
