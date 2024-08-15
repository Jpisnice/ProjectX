// src/utils/db.ts

import mysql, { RowDataPacket } from 'mysql2/promise';
import pool from '@/lib/db';

// src/lib/authDb.ts

export type User = {
  id: number;
  email: string;
  username: string;
  role: string;
  ward_id: number; // Ensure this matches the type in your database schema
  address: string;
  profile_picture?: string;
  // other fields as necessary
};

const mypool = pool;



export async function getUserByEmail(email: string): Promise<User | null> {
  const [rows]: [RowDataPacket[], any] = await mypool.query(
    'SELECT * FROM users WHERE email = ?',
    [email]
  );

  return rows[0] as User || null;
}
export async function createUser(data: { username: string; email: string; ward_id: number; address: string; profile_picture?: string }) {
  const { username, email, ward_id, address, profile_picture } = data;
  await mypool.query(
    'INSERT INTO users (username, email, ward_id, address, profile_picture) VALUES (?, ?, ?, ?, ?)',
    [username, email, ward_id, address, profile_picture]
  );
}
