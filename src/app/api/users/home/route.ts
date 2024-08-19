import { NextResponse } from 'next/server';
import { doQuery } from '@/lib/db';  // Adjust the import path if needed

export async function GET() {
  try {
    const query = `
      SELECT 
        p.id, 
        p.content AS caption, 
        p.image, 
        p.resolve_count, 
        p.created_at, 
        p.updated_at, 
        i.title AS issue_title
      FROM posts p
      JOIN issues i ON p.issue_id = i.id
    `;

    const posts = await doQuery(query);

    // Convert image from bytea to base64 string if necessary
    const formattedPosts = posts.map((post: any) => ({
      ...post,
      image: post.image ? Buffer.from(post.image).toString('base64') : null,
    }));

    return NextResponse.json(formattedPosts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}
