"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface Comment {
    id: number;
    content: string;
    created_at: string;
    user_id: number;
}

interface Post {
    id: number;
    content: string;
    issue_id: number;
    user_id: number;
    image: string;
    resolve_count: number;
    created_at: string;
    updated_at: string;
    comments: Comment[];
    like_count: number;
}

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/users/home');
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const handleAddComment = async (postId: number) => {
    try {
      const res = await fetch('/api/users/home', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          post_id: postId,
          user_id: 1, // Replace with actual user_id
          content: newComment,
        }),
      });
      const addedComment = await res.json();
      setPosts(posts.map(post => post.id === postId ? { ...post, comments: [...post.comments, addedComment] } : post));
      setNewComment("");
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const handleAddLike = async (postId: number) => {
    try {
      await fetch('/api/users/home', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          post_id: postId,
          user_id: 1, // Replace with actual user_id
        }),
      });
      setPosts(posts.map(post => post.id === postId ? { ...post, like_count: post.like_count + 1 } : post));
    } catch (error) {
      console.error('Error adding like:', error);
    }
  };

  return (
    <ScrollArea className="w-full h-screen">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        {posts.map((post) => (
          <Card key={post.id} className="w-full max-w-2xl mb-4 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Issue #{post.issue_id}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                {post.image && (
                  <img
                    src={`data:image/jpeg;base64,${post.image}`}
                    alt="Post image"
                    className="object-cover w-full h-auto rounded-lg"
                  />
                )}
              </div>
              <p className="mb-2"><strong>Content:</strong> {post.content}</p>
              <p className="mb-2"><strong>Resolve Count:</strong> {post.resolve_count}</p>
              <p className="mb-2"><strong>Likes:</strong> {post.like_count}</p>
              <Button onClick={() => handleAddLike(post.id)}>Like</Button>
              
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Comments:</h3>
                {post.comments.map((comment) => (
                  <div key={comment.id} className="mb-2">
                    <p>{comment.content}</p>
                    <span className="text-xs text-gray-500">{new Date(comment.created_at).toLocaleString()}</span>
                  </div>
                ))}
                <Textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Add a comment..."
                  className="w-full mb-2"
                />
                <Button onClick={() => handleAddComment(post.id)}>Comment</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
};

export default HomePage;
