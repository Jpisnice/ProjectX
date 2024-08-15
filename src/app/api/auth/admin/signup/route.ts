import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/database/mysql.config";
import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
    const connection = await mysql.createConnection({
        host: process.env.MYSQL_HOST!,
        user: process.env.MYSQL_USER!,
        password: process.env.MYSQL_PASSWORD!,
        database: process.env.MYSQL_DATABASE!,
    });

    try {
        const salt = bcrypt.genSaltSync(10);
        const password = bcrypt.hashSync("123456", salt);

        // Insert the admin record into the MySQL database
        await connection.execute(
            'INSERT INTO Admin (email, password, role) VALUES (?, ?, ?)',
            ["admin@gmail.com", password, "Admin"]
        );

        return NextResponse.json({
            status: 200,
            message: "Admin created successfully",
        }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ status: 500, message: "Internal Server Error" }, { status: 500 });
    } finally {
        await connection.end();
    }
}
