CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    address TEXT,
    profile_picture VARCHAR(255),
    role ENUM('User') NOT NULL DEFAULT 'User',
    ward_id INT, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (ward_id) REFERENCES wards(id) 
);

CREATE TABLE admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL, -- References the id in the users table
    role ENUM('Panch', 'Sarpanch', 'MLA') NOT NULL,
    ward_id INT NULL, -- Only applicable for Panch
    sarpanch_id INT NULL, -- Only applicable for Panch, references Sarpanch
    mla_id INT NULL, -- Only applicable for Sarpanch, references MLA
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (ward_id) REFERENCES wards(id) -- Ensure the admin's ward is valid
);

CREATE TABLE wards (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    address TEXT, 
    admin_id INT NOT NULL, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (admin_id) REFERENCES admins(id)
);

CREATE TABLE issues (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    location VARCHAR(255), 
    resolved BOOLEAN DEFAULT FALSE,
    ward_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (ward_id) REFERENCES wards(id)
);

CREATE TABLE posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    issue_id INT NOT NULL,
    content TEXT NOT NULL,
    user_id INT NOT NULL,
    image VARCHAR(255), 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (issue_id) REFERENCES issues(id)
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT NOT NULL,
    user_id INT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES posts(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE likes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT NOT NULL,
    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES posts(id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    UNIQUE (post_id, user_id) 
);

INSERT INTO users (username, password_hash, email, address, profile_picture, role, ward_id)
VALUES 
('admin1', 'hashed_password1', 'admin1@example.com', '123 Main St', 'profile1.jpg', 'User', 1),
('admin2', 'hashed_password2', 'admin2@example.com', '456 Elm St', 'profile2.jpg', 'User', 2),
('admin3', 'hashed_password3', 'admin3@example.com', '789 Oak St', 'profile3.jpg', 'User', 1),
('user1', 'hashed_password4', 'user1@example.com', '321 Maple St', 'user1.jpg', 'User', 2),
('user2', 'hashed_password5', 'user2@example.com', '654 Birch St', 'user2.jpg', 'User', 1);

INSERT INTO admins (user_id, role, ward_id)
VALUES 
((SELECT id FROM users WHERE username = 'admin1'), 'Panch', 1),
((SELECT id FROM users WHERE username = 'admin2'), 'Sarpanch', 2),
((SELECT id FROM users WHERE username = 'admin3'), 'MLA', NULL);

-- Insert dummy data into Wards, Issues, and Posts tables
INSERT INTO wards (name, description, address, admin_id)
VALUES 
('Ward 1', 'Description for Ward 1', 'Address for Ward 1', (SELECT id FROM admins WHERE role = 'Panch')),
('Ward 2', 'Description for Ward 2', 'Address for Ward 2', (SELECT id FROM admins WHERE role = 'Sarpanch'));

INSERT INTO issues (title, description, location, resolved, ward_id)
VALUES 
('Issue 1', 'Description for Issue 1', 'Location 1', FALSE, (SELECT id FROM wards WHERE name = 'Ward 1')),
('Issue 2', 'Description for Issue 2', 'Location 2', FALSE, (SELECT id FROM wards WHERE name = 'Ward 2'));

INSERT INTO posts (issue_id, content, image)
VALUES 
((SELECT id FROM issues WHERE title = 'Issue 1'), 'Post content for Issue 1', 'image1.jpg'),
((SELECT id FROM issues WHERE title = 'Issue 2'), 'Post content for Issue 2', 'image2.jpg');

-- Insert dummy data into the Comments table
INSERT INTO comments (post_id, user_id, content)
VALUES 
((SELECT id FROM posts WHERE issue_id = (SELECT id FROM issues WHERE title = 'Issue 1')), (SELECT id FROM users WHERE username = 'user1'), 'Comment on Issue 1 by User 1'),
((SELECT id FROM posts WHERE issue_id = (SELECT id FROM issues where title = 'Issue 2')), (SELECT id FROM users WHERE username = 'user2'), 'Comment on Issue 2 by User 2');

-- Insert dummy data into the Likes table
INSERT INTO likes (post_id, user_id)
VALUES 
((SELECT id FROM posts WHERE issue_id = (SELECT id FROM issues WHERE title = 'Issue 1')), (SELECT id FROM users WHERE username = 'user1')),
((SELECT id FROM posts WHERE issue_id = (SELECT id FROM issues WHERE title = 'Issue 2')), (SELECT id FROM users WHERE username = 'user2'));
