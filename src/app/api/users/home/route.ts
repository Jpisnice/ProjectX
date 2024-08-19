import { NextResponse } from "next/server";
import { doQuery } from "@/lib/db";

export async function GET() {
    try {
        const query = `
            SELECT p.*, COUNT(l.id) as like_count,
                   json_agg(json_build_object(
                       'id', c.id,
                       'content', c.content,
                       'created_at', c.created_at,
                       'user_id', c.user_id
                   )) as comments
            FROM posts p
            LEFT JOIN likes l ON p.id = l.post_id
            LEFT JOIN comments c ON p.id = c.post_id
            GROUP BY p.id
            ORDER BY p.created_at DESC
        `;
        const posts = await doQuery(query);
        return NextResponse.json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        return NextResponse.error();
    }
}

export async function POST(request: Request) {
    try {
        const { post_id, user_id, content } = await request.json();

        const insertCommentQuery = `
            INSERT INTO comments (post_id, user_id, content, created_at)
            VALUES ($1, $2, $3, CURRENT_TIMESTAMP)
            RETURNING *
        `;
        const comment = await doQuery(insertCommentQuery, [post_id, user_id, content]);

        return NextResponse.json(comment[0]);
    } catch (error) {
        console.error('Error adding comment:', error);
        return NextResponse.error();
    }
}

export async function PATCH(request: Request) {
    try {
        const { post_id, user_id } = await request.json();

        const insertLikeQuery = `
            INSERT INTO likes (post_id, user_id)
            VALUES ($1, $2)
            RETURNING *
        `;
        const like = await doQuery(insertLikeQuery, [post_id, user_id]);

        return NextResponse.json(like[0]);
    } catch (error) {
        console.error('Error adding like:', error);
        return NextResponse.error();
    }
}
