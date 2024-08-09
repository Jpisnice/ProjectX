"use client"
import React, { useState } from 'react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { PostDialog } from '@/components/postdialog'; // Ensure this component is correctly imported

interface User {
  name: string;
  ward: string;
  address: string;
  profilePicture: string;
}

interface Post {
  id: number;
  title: string;
  image: string;
  description: string;
  likes: number;
  comments: number;
  time: string;
  wardNumber: number;
  user: User;
}

const ProfilePage = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const user: User = {
    name: "John Doe",
    ward:"7",
    address: "Oppsite Gokuldham , Mount Everest , Moon - Pakistan",
    profilePicture: "https://via.placeholder.com/150", // Placeholder image
  };

  const posts: Post[] = [
    {
      id: 1,
      title: "Beautiful Sunset",
      image: "https://via.placeholder.com/300x200", // Placeholder image
      description: "A stunning sunset over the mountains.",
      likes: 120,
      comments: 45,
      time: "2 hours ago",
      wardNumber: 7,
      user: user, // Attach user to post
    },
    {
      id: 1,
      title: "Beautiful Sunset",
      image: "https://via.placeholder.com/300x200", // Placeholder image
      description: "A stunning sunset over the mountains.",
      likes: 120,
      comments: 45,
      time: "2 hours ago",
      wardNumber: 7,
      user: user, // Attach user to post
    },
    {
      id: 1,
      title: "Beautiful Sunset",
      image: "https://via.placeholder.com/300x200", // Placeholder image
      description: "A stunning sunset over the mountains.",
      likes: 120,
      comments: 45,
      time: "2 hours ago",
      wardNumber: 7,
      user: user, // Attach user to post
    },
    {
      id: 1,
      title: "Beautiful Sunset",
      image: "https://via.placeholder.com/300x200", // Placeholder image
      description: "A stunning sunset over the mountains.",
      likes: 120,
      comments: 45,
      time: "2 hours ago",
      wardNumber: 7,
      user: user, // Attach user to post
    },
    // Add more posts as needed
  ];

  return (
    <ScrollArea className="h-screen w-full p-6 bg-gray-100">
      <div className="flex flex-col items-center mb-8 w-full p-6 rounded-lg bg-grey-100">
        <img
          src={user.profilePicture}
          alt="Profile"
          className="w-36 h-36 rounded-full object-cover mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
        <p className="text-lg text-gray-700">Ward no - {user.ward}</p>
        <p className="text-md text-gray-500 mt-2">{user.address}</p>
      </div>
      <div className="w-full max-w-6xl mx-auto p-6 rounded-lg bg-gray-100">
        <h2 className="text-xl font-semibold mb-4 text-center">My Posts</h2> <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {posts.map(post => (
            <Dialog key={post.id} onOpenChange={(open) => !open && setSelectedPost(null)}>
              <DialogTrigger asChild>
                <div
                  className="bg-gray-50 rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 text-center">{post.title}</h3>
                    <p className="text-gray-700 mb-4 text-center">{post.description}</p>
                    <div className="flex justify-center text-gray-600 text-sm">
                      <span className="mr-4">{post.likes} Likes</span>
                      <span>{post.comments} Comments</span>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              {selectedPost && <PostDialog post={selectedPost} />}
            </Dialog>
          ))}
        </div>
      </div>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
};

export default ProfilePage;
