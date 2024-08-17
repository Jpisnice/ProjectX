
-- Database: "projectx"

-- Table structure for table "admins"
CREATE TABLE IF NOT EXISTS "admins" (
  "id" SERIAL PRIMARY KEY,
  "user_id" integer NOT NULL,
  "role" varchar(10) CHECK (role IN ('Panch', 'Sarpanch', 'MLA')) NOT NULL,
  "ward_id" integer DEFAULT NULL,
  "sarpanch_id" integer DEFAULT NULL,
  "mla_id" integer DEFAULT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Table structure for table "comments"
CREATE TABLE IF NOT EXISTS "comments" (
  "id" SERIAL PRIMARY KEY,
  "post_id" integer NOT NULL,
  "user_id" integer NOT NULL,
  "content" text NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Table structure for table "issues"
CREATE TABLE IF NOT EXISTS "issues" (
  "id" SERIAL PRIMARY KEY,
  "title" varchar(255) NOT NULL,
  "description" text DEFAULT NULL,
  "location" varchar(255) DEFAULT NULL,
  "resolved" smallint DEFAULT 0,
  "ward_id" integer NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Table structure for table "likes"
CREATE TABLE IF NOT EXISTS "likes" (
  "id" SERIAL PRIMARY KEY,
  "post_id" integer NOT NULL,
  "user_id" integer NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Table structure for table "posts"
CREATE TABLE IF NOT EXISTS "posts" (
  "id" SERIAL PRIMARY KEY,
  "issue_id" integer NOT NULL,
  "content" text NOT NULL,
  "user_id" integer NOT NULL,
  "image" varchar(255) DEFAULT NULL,
  "resolve_count" smallint DEFAULT 0 CHECK ("resolve_count" <= 5),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Table structure for table "users"
CREATE TABLE IF NOT EXISTS "users" (
  "id" SERIAL PRIMARY KEY,
  "username" varchar(255) NOT NULL,
  "password_hash" varchar(255) NOT NULL,
  "email" varchar(255) NOT NULL,
  "address" text DEFAULT NULL,
  "profile_picture" varchar(255) DEFAULT NULL,
  "role" varchar(10) NOT NULL DEFAULT 'User',
  "ward_id" integer DEFAULT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Table structure for table "wards"
CREATE TABLE IF NOT EXISTS "wards" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar(255) NOT NULL,
  "description" text DEFAULT NULL,
  "address" text DEFAULT NULL,
  "admin_id" integer NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Constraints for table "admins"
ALTER TABLE "admins"
  ADD CONSTRAINT "admins_ibfk_1" FOREIGN KEY ("user_id") REFERENCES "users" ("id"),
  ADD CONSTRAINT "fk_mla" FOREIGN KEY ("mla_id") REFERENCES "admins" ("id") ON DELETE SET NULL,
  ADD CONSTRAINT "fk_sarpanch" FOREIGN KEY ("sarpanch_id") REFERENCES "admins" ("id") ON DELETE SET NULL;

-- Constraints for table "comments"
ALTER TABLE "comments"
  ADD CONSTRAINT "comments_ibfk_1" FOREIGN KEY ("post_id") REFERENCES "posts" ("id"),
  ADD CONSTRAINT "comments_ibfk_2" FOREIGN KEY ("user_id") REFERENCES "users" ("id");

-- Constraints for table "issues"
ALTER TABLE "issues"
  ADD CONSTRAINT "issues_ibfk_1" FOREIGN KEY ("ward_id") REFERENCES "wards" ("id");

-- Constraints for table "likes"
ALTER TABLE "likes"
  ADD CONSTRAINT "likes_ibfk_1" FOREIGN KEY ("post_id") REFERENCES "posts" ("id"),
  ADD CONSTRAINT "likes_ibfk_2" FOREIGN KEY ("user_id") REFERENCES "users" ("id");

-- Constraints for table "posts"
ALTER TABLE "posts"
  ADD CONSTRAINT "posts_ibfk_1" FOREIGN KEY ("issue_id") REFERENCES "issues" ("id"),
  ADD CONSTRAINT "posts_ibfk_2" FOREIGN KEY ("user_id") REFERENCES "users" ("id");

-- Constraints for table "wards"
ALTER TABLE "wards"
  ADD CONSTRAINT "fk_admin_id" FOREIGN KEY ("admin_id") REFERENCES "admins" ("id");

-- Inserting data for table "users"
INSERT INTO users (id, username, password_hash, email, address, profile_picture, role, ward_id, created_at, updated_at) VALUES
(1, 'admin1', 'hashed_password1', 'admin1@example.com', '123 Main St', 'profile1.jpg', 'User', 1, '2024-08-11 13:15:51', '2024-08-11 13:15:51'),
(2, 'admin2', 'hashed_password2', 'admin2@example.com', '456 Elm St', 'profile2.jpg', 'User', 2, '2024-08-11 13:15:51', '2024-08-11 13:15:51'),
(3, 'admin3', 'hashed_password3', 'admin3@example.com', '789 Oak St', 'profile3.jpg', 'User', 1, '2024-08-11 13:15:51', '2024-08-11 13:15:51'),
(4, 'user1', 'hashed_password4', 'user1@example.com', '321 Maple St', 'user1.jpg', 'User', 2, '2024-08-11 13:15:51', '2024-08-11 13:15:51'),
(5, 'user2', 'hashed_password5', 'user2@example.com', '654 Birch St', 'user2.jpg', 'User', 1, '2024-08-11 13:15:51', '2024-08-11 13:15:51'),
(6, 'Panch User 2', 'hashed_password2', 'panch2@example.com', 'Address 2', 'panch2.jpg', 'User', 3, '2024-08-13 08:26:32', '2024-08-13 08:26:32'),
(7, 'Panch User 3', 'hashed_password3', 'panch3@example.com', 'Address 3', 'panch3.jpg', 'User', 3, '2024-08-13 08:26:32', '2024-08-13 08:26:32'),
(8, 'Panch User 4', 'hashed_password4', 'panch4@example.com', 'Address 4', 'panch4.jpg', 'User', 4, '2024-08-13 08:26:32', '2024-08-13 08:26:32'),
(9, 'Sarpanch User 2', 'hashed_password2', 'sarpanch2@example.com', 'Address 5', 'sarpanch2.jpg', 'User', 4, '2024-08-13 08:26:32', '2024-08-13 08:26:32'),
(10, 'MLA User 2', 'hashed_password2', 'mla2@example.com', 'Address 6', 'mla2.jpg', 'User', 5, '2024-08-13 08:26:32', '2024-08-13 08:26:32');

-- Inserting data for table "wards"
INSERT INTO wards (id, name, description, address, admin_id, created_at, updated_at) VALUES
(1, 'Ward 1', 'Description for Ward 1', 'Address for Ward 1', 1, '2024-08-11 13:15:52', '2024-08-11 13:15:52'),
(2, 'Ward 2', 'Description for Ward 2', 'Address for Ward 2', 2, '2024-08-11 13:15:52', '2024-08-11 13:15:52'),
(3, 'Ward 3', 'Description for Ward 3', 'Address for Ward 3', 5, '2024-08-11 13:15:52', '2024-08-11 13:15:52'),
(4, 'Ward 4', 'Description for Ward 4', 'Address for Ward 4', 7, '2024-08-11 13:15:52', '2024-08-11 13:15:52'),
(5, 'Ward 5', 'Description for Ward 5', 'Address for Ward 5', 8, '2024-08-11 13:15:52', '2024-08-11 13:15:52');

-- Inserting data for table "admins"
INSERT INTO admins (id, user_id, role, ward_id, sarpanch_id, mla_id, created_at, updated_at) VALUES
(1, 1, 'Panch', 1, NULL, NULL, '2024-08-11 13:15:52', '2024-08-11 13:15:52'),
(2, 2, 'Sarpanch', 2, NULL, NULL, '2024-08-11 13:15:52', '2024-08-11 13:15:52'),
(3, 3, 'MLA', 4, NULL, NULL, '2024-08-11 13:15:52', '2024-08-13 08:43:11'),
(4, 9, 'Sarpanch', 3, NULL, NULL, '2024-08-13 08:28:49', '2024-08-13 08:28:49'),
(5, 6, 'Panch', 3, NULL, NULL, '2024-08-13 08:28:49', '2024-08-13 08:28:49'),
(6, 7, 'Panch', 3, NULL, NULL, '2024-08-13 08:28:49', '2024-08-13 08:28:49'),
(7, 8, 'Panch', 4, NULL, NULL, '2024-08-13 08:28:49', '2024-08-13 08:41:32'),
(8, 10, 'MLA', 5, NULL, NULL, '2024-08-13 08:28:49', '2024-08-13 08:41:32');

-- Inserting data for table "issues"
INSERT INTO issues (id, title, description, location, resolved, ward_id, created_at, updated_at) VALUES
(1, 'Issue 1', 'Description for Issue 1', 'Location 1', 0, 1, '2024-08-11 13:15:52', '2024-08-11 13:15:52'),
(2, 'Issue 2', 'Description for Issue 2', 'Location 2', 0, 2, '2024-08-11 13:15:52', '2024-08-11 13:15:52'),
(3, 'Issue 3A', 'Description for Issue 3A', 'Location 3A', 0, 3, '2024-08-13 08:39:29', '2024-08-13 08:39:29'),
(4, 'Issue 3B', 'Description for Issue 3B', 'Location 3B', 0, 3, '2024-08-13 08:39:29', '2024-08-13 08:39:29'),
(5, 'Issue 4A', 'Description for Issue 4A', 'Location 4A', 0, 4, '2024-08-13 08:39:29', '2024-08-13 08:39:29'),
(6, 'Issue 4B', 'Description for Issue 4B', 'Location 4B', 0, 4, '2024-08-13 08:39:29', '2024-08-13 08:39:29'),
(7, 'Issue 5A', 'Description for Issue 5A', 'Location 5A', 0, 5, '2024-08-13 08:39:29', '2024-08-13 08:39:29'),
(8, 'Issue 5B', 'Description for Issue 5B', 'Location 5B', 0, 5, '2024-08-13 08:39:29', '2024-08-13 08:39:29');

-- Inserting data for table "posts"
INSERT INTO posts (id, issue_id, content, user_id, image, resolve_count, created_at, updated_at) VALUES
(1, 1, 'Post content for Issue 1', 4, 'image1.jpg', 0, '2024-08-11 13:15:52', '2024-08-11 13:15:52'),
(2, 2, 'Post content for Issue 2', 5, 'image2.jpg', 0, '2024-08-11 13:15:52', '2024-08-11 13:15:52'),
(3, 3, 'Post content for Issue 3A', 6, 'image3A.jpg', 0, '2024-08-11 13:15:52', '2024-08-11 13:15:52'),
(4, 4, 'Post content for Issue 3B', 7, 'image3B.jpg', 0, '2024-08-11 13:15:52', '2024-08-11 13:15:52'),
(5, 5, 'Post content for Issue 4A', 8, 'image4A.jpg', 0, '2024-08-11 13:15:52', '2024-08-11 13:15:52'),
(6, 6, 'Post content for Issue 4B', 9, 'image4B.jpg', 0, '2024-08-11 13:15:52', '2024-08-11 13:15:52'),
(7, 7, 'Post content for Issue 5A', 10, 'image5A.jpg', 0, '2024-08-11 13:15:52', '2024-08-11 13:15:52'),
(8, 8, 'Post content for Issue 5B', 10, 'image5B.jpg', 0, '2024-08-11 13:15:52', '2024-08-11 13:15:52');

-- Inserting data for table "comments"
INSERT INTO comments (id, post_id, user_id, content, created_at) VALUES
(1, 1, 2, 'Comment 1 for Post 1', '2024-08-11 13:15:52' ),
(2, 2, 3, 'Comment 2 for Post 2', '2024-08-11 13:15:52' ),
(3, 3, 4, 'Comment 3 for Post 3A', '2024-08-11 13:15:52'),
(4, 4, 5, 'Comment 4 for Post 3B', '2024-08-11 13:15:52' ),
(5, 5, 6, 'Comment 5 for Post 4A', '2024-08-11 13:15:52' ),
(6, 6, 7, 'Comment 6 for Post 4B', '2024-08-11 13:15:52'),
(7, 7, 8, 'Comment 7 for Post 5A', '2024-08-11 13:15:52' ),
(8, 8, 9, 'Comment 8 for Post 5B', '2024-08-11 13:15:52' );
