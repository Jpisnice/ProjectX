import  User  from '@/models/user';
import  Post  from '@/models/posts';
import  Comment  from '@/models/comment';
import  Like  from '@/models/like';
import  Issue  from '@/models/issue';
import  Ward  from '@/models/ward';
import  Admin  from '@/models/admin';

export async function createUser(username: string, passwordHash: string, email: string, address: string, profilePicture: string, role: 'User') {
    return await User.create({
        username,
        password_hash: passwordHash,
        email,
        address,
        profile_picture: profilePicture,
        role,
    });
}

export async function createPost(issueId: number, content: string, image: string) {
    return await Post.create({
        issue_id: issueId,
        content,
        image,
    });
}

export async function createComment(postId: number, userId: number, content: string) {
    return await Comment.create({
        post_id: postId,
        user_id: userId,
        content,
    });
}

export async function createLike(postId: number, userId: number) {
    return await Like.create({
        post_id: postId,
        user_id: userId,
    });
}

// Example utility function to create an Issue
export async function createIssue(title: string, description: string, location: string, wardId: number) {
    return await Issue.create({
        title,
        description,
        location,
        ward_id: wardId,
        resolved: false,
    });
}

// Example utility function to create a Ward
export async function createWard(name: string, description: string, address: string, adminId: number) {
    return await Ward.create({
        name,
        description,
        address,
        admin_id: adminId,
    });
}

// Example utility function to create an Admin
export async function createAdmin(userId: number, role: 'Panch' | 'Sarpanch' | 'MLA', wardId?: number, sarpanchId?: number, mlaId?: number) {
    return await Admin.create({
        user_id: userId,
        role,
        ward_id: wardId,
        sarpanch_id: sarpanchId,
        mla_id: mlaId,
    });
}
