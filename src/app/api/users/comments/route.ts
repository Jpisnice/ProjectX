import { NextRequest, NextResponse } from "next/server";
import { doQuery } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const { post_id, user_id, content } = await req.json();

    const query = `
      INSERT INTO comments (post_id, user_id, content, created_at)
      VALUES ($1, $2, $3, CURRENT_TIMESTAMP)
      RETURNING id, content, created_at, user_id;
    `;
    const params = [post_id, user_id, content];
    const result = await doQuery(query, params);

    return NextResponse.json(result[0]);
  } catch (error) {
    console.error("Error adding comment:", error);
    return NextResponse.error();
  }
}
