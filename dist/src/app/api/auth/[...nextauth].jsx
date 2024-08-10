"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const next_auth_1 = __importDefault(require("next-auth"));
const github_1 = __importDefault(require("next-auth/providers/github"));
const options = {
    providers: [
        (0, github_1.default)({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        // Add more providers here
    ],
    pages: {
        signIn: "/auth/signin",
        signOut: "/auth/signout",
        error: "/auth/error", // Error code passed in query string as ?error=
        verifyRequest: "/auth/verify-request", // (used for check email message)
        newUser: "", // If set to an empty string, new users will be directed to the homepage after sign in
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id;
            }
            return session;
        },
    },
};
exports.default = (req, res) => (0, next_auth_1.default)(req, res, options);
