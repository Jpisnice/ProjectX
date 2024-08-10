"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const scroll_area_1 = require("@/components/ui/scroll-area");
const dialog_1 = require("@/components/ui/dialog");
const postdialog_1 = require("@/components/postdialog"); // Ensure this component is correctly imported
const ProfilePage = () => {
    const [selectedPost, setSelectedPost] = (0, react_1.useState)(null);
    const user = {
        name: "John Doe",
        ward: "7",
        address: "Oppsite Gokuldham , Mount Everest , Moon - Pakistan",
        profilePicture: "https://via.placeholder.com/150", // Placeholder image
    };
    const posts = [
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
    return (<scroll_area_1.ScrollArea className="h-screen w-full p-6 bg-gray-100">
      <div className="flex flex-col items-center mb-8 w-full p-6 rounded-lg bg-grey-100">
        <img src={user.profilePicture} alt="Profile" className="w-36 h-36 rounded-full object-cover mb-4"/>
        <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
        <p className="text-lg text-gray-700">Ward no - {user.ward}</p>
        <p className="text-md text-gray-500 mt-2">{user.address}</p>
      </div>
      <div className="w-full max-w-6xl mx-auto p-6 rounded-lg bg-gray-100">
        <h2 className="text-xl font-semibold mb-4 text-center">My Posts</h2> <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {posts.map(post => (<dialog_1.Dialog key={post.id} onOpenChange={(open) => !open && setSelectedPost(null)}>
              <dialog_1.DialogTrigger asChild>
                <div className="bg-gray-50 rounded-lg overflow-hidden cursor-pointer" onClick={() => setSelectedPost(post)}>
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover"/>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 text-center">{post.title}</h3>
                    <p className="text-gray-700 mb-4 text-center">{post.description}</p>
                    <div className="flex justify-center text-gray-600 text-sm">
                      <span className="mr-4">{post.likes} Likes</span>
                      <span>{post.comments} Comments</span>
                    </div>
                  </div>
                </div>
              </dialog_1.DialogTrigger>
              {selectedPost && <postdialog_1.PostDialog post={selectedPost}/>}
            </dialog_1.Dialog>))}
        </div>
      </div>
      <scroll_area_1.ScrollBar orientation="vertical"/>
    </scroll_area_1.ScrollArea>);
};
exports.default = ProfilePage;
