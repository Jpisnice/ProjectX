"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface Post {
  id: number;
  content: string;
  issue_title: string;
  location: string;
  image: string; // base64 encoded image
  resolve_count: number;
  created_at: string;
  updated_at: string;
}

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/users/home'); // Updated endpoint
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Post[] = await res.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <ScrollArea className="w-full h-screen">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Card key={post.id} className="w-full max-w-2xl mb-4 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold">{post.issue_title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  {post.image ? (
                    <img
                      src={`data:image/jpeg;base64,${post.image}`}
                      alt="Post image"
                      className="object-cover w-full h-auto rounded-lg"
                    />
                  ) : (
                    <p>No image available</p>
                  )}
                </div>
                <p className="mb-2"><strong>Content:</strong> {post.content}</p>
                <p className="mb-2"><strong>Location:</strong> {post.location}</p>
                <p className="mb-2"><strong>Resolve Count:</strong> {post.resolve_count}</p>
                <p className="mb-2"><strong>Created At:</strong> {new Date(post.created_at).toLocaleString()}</p>
                <p className="mb-2"><strong>Updated At:</strong> {new Date(post.updated_at).toLocaleString()}</p>
              </CardContent>
            </Card>
          ))
        ) : (
          <p>No posts available</p>
        )}
      </div>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
};

export default HomePage;
