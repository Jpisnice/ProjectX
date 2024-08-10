"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostDialog = void 0;
const react_1 = __importDefault(require("react"));
const dialog_1 = require("@/components/ui/dialog");
const button_1 = require("@/components/ui/button");
const PostDialog = ({ post }) => {
    return (<dialog_1.DialogContent>
      <div className="flex items-center">
        <img src={post.user.profilePicture} alt={post.user.name} className="w-12 h-12 rounded-full mr-4"/>
        <div>
          <h3 className="text-lg font-bold">{post.user.name}</h3>
          <p className="text-sm text-gray-500">{post.time}</p>
        </div>
      </div>
      <img src={post.image} alt={post.title} className="w-full h-64 object-cover my-4 rounded-lg"/>
      <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-700 mb-4">{post.description}</p>
      <div className="flex justify-between text-gray-600 text-sm mb-4">
        <span>{post.likes} Likes</span>
        <span>{post.comments} Comments</span>
      </div>
      <p className="text-gray-500 text-sm">Ward: {post.wardNumber}</p>
      <dialog_1.DialogFooter>
        <button_1.Button onClick={() => console.log('Liked!')}>Like</button_1.Button>
        <button_1.Button onClick={() => console.log('Commented!')}>Comment</button_1.Button>
      </dialog_1.DialogFooter>
    </dialog_1.DialogContent>);
};
exports.PostDialog = PostDialog;
exports.default = exports.PostDialog;
