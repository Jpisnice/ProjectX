"use client";

import React, { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Post {
  id: string;
  images: string[];
  caption: string;
  likes: number;
  comments: string[];
}

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const [showCommentInput, setShowCommentInput] = useState<string | null>(null);

  useEffect(() => {
    const examplePosts: Post[] = [
      {
        id: "1",
        images: [
          "/images/post1.jpg",
          "/images/post2.jpg",
          "/images/post3.jpg",
        ],
        caption: "This is the first post",
        likes: 10,
        comments: ["Great post!", "Love it!"],
      },
      {
        id: "2",
        images: [
          "/images/post4.jpg",
          "/images/post5.jpg",
        ],
        caption: "Another awesome post!",
        likes: 20,
        comments: ["Awesome!", "Nice photo!"],
      },
      {
        id: "3",
        images: [
          "/images/post6.jpg",
        ],
        caption: "Yet another post!",
        likes: 15,
        comments: ["So cool!", "Fantastic!"],
      },
    ];

    setPosts(examplePosts);
  }, []);

  const handleLike = (postId: string) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handleAddComment = (postId: string) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, comments: [...post.comments, newComment] } : post
    ));
    setNewComment(""); // Clear input after adding comment
    setShowCommentInput(null); // Hide input after adding comment
  };

  const handleCommentInputToggle = (postId: string) => {
    setShowCommentInput(showCommentInput === postId ? null : postId);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <ScrollArea className="w-full max-w-3xl h-screen rounded-md border border-gray-300 overflow-y-scroll">
        <div className="space-y-4 p-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img
                  src={post.images[0]} // Showing the first image for simplicity
                  alt={`Post ${post.id} Image`}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-800">{post.caption}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <Button
                    onClick={() => handleLike(post.id)}
                    className="bg-blue-500 text-white hover:bg-blue-600"
                  >
                    Like ({post.likes})
                  </Button>
                  <Button
                    onClick={() => handleCommentInputToggle(post.id)}
                    className="bg-gray-800 text-white hover:bg-gray-600"
                  >
                    {showCommentInput === post.id ? "Hide Comment Box" : "Add Comment"}
                  </Button>
                </div>
                <div className="mt-4">
                  {post.comments.map((comment, index) => (
                    <p key={index} className="text-gray-600">{comment}</p>
                  ))}
                </div>
                {showCommentInput === post.id && (
                  <div className="mt-4 flex">
                    <input
                      type="text"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="border border-gray-300 p-2 rounded-md flex-grow"
                      placeholder="Add a comment..."
                    />
                    <Button
                      onClick={() => handleAddComment(post.id)}
                      className="ml-2 bg-gray-800 text-white hover:bg-gray-600"
                    >
                      Add
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default HomePage;
