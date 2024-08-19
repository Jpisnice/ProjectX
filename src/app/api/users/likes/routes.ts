import { NextRequest, NextResponse } from "next/server";
import { doQuery } from "@/lib/db";

export async function PATCH(req: NextRequest) {
  try {
    const { post_id } = await req.json();

    const query = `
      insert into likes 
    `;
    const params = [post_id];
    const result = await doQuery(query, params);

    return NextResponse.json(result[0]);
  } catch (error) {
    console.error("Error incrementing like count:", error);
    return NextResponse.error();
  }
}
