"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = createUser;
exports.createPost = createPost;
exports.createComment = createComment;
exports.createLike = createLike;
exports.createIssue = createIssue;
exports.createWard = createWard;
exports.createAdmin = createAdmin;
const user_1 = __importDefault(require("@/models/user"));
const posts_1 = __importDefault(require("@/models/posts"));
const comment_1 = __importDefault(require("@/models/comment"));
const like_1 = __importDefault(require("@/models/like"));
const issue_1 = __importDefault(require("@/models/issue"));
const ward_1 = __importDefault(require("@/models/ward"));
const admin_1 = __importDefault(require("@/models/admin"));
async function createUser(username, passwordHash, email, address, profilePicture, role) {
    return await user_1.default.create({
        username,
        password_hash: passwordHash,
        email,
        address,
        profile_picture: profilePicture,
        role,
    });
}
async function createPost(issueId, content, image) {
    return await posts_1.default.create({
        issue_id: issueId,
        content,
        image,
    });
}
async function createComment(postId, userId, content) {
    return await comment_1.default.create({
        post_id: postId,
        user_id: userId,
        content,
    });
}
async function createLike(postId, userId) {
    return await like_1.default.create({
        post_id: postId,
        user_id: userId,
    });
}
// Example utility function to create an Issue
async function createIssue(title, description, location, wardId) {
    return await issue_1.default.create({
        title,
        description,
        location,
        ward_id: wardId,
        resolved: false,
    });
}
// Example utility function to create a Ward
async function createWard(name, description, address, adminId) {
    return await ward_1.default.create({
        name,
        description,
        address,
        admin_id: adminId,
    });
}
// Example utility function to create an Admin
async function createAdmin(userId, role, wardId, sarpanchId, mlaId) {
    return await admin_1.default.create({
        user_id: userId,
        role,
        ward_id: wardId,
        sarpanch_id: sarpanchId,
        mla_id: mlaId,
    });
}
