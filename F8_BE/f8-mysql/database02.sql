USE f8_backend_k1;

CREATE TABLE posts (
    id INT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    user_id INT,
    create_at TIMESTAMP,
    update_at TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

USE f8_backend_k1;

INSERT INTO groups (id,name,create_at,update_at) VALUES (1,'Group 1',NOW(),NOW());
INSERT INTO groups (id,name,create_at,update_at) VALUES (2,'Group 2',NOW(),NOW());
INSERT INTO users (id,name,email,password,group_id,create_at,update_at) VALUES (1,'Hien','hien@gmail.com','123456',1,NOW(),NOW());
INSERT INTO users (id,name,email,password,group_id,create_at,update_at) VALUES (2,'Duc','duc@gmail.com','123456',2,NOW(),NOW());

INSERT INTO posts (id,title,content,user_id,create_at,update_at) VALUES (1,'Title 1','Content 1',1,NOW(),NOW());
INSERT INTO posts (id,title,content,user_id,create_at,update_at) VALUES (1,'Title 2','Content 2',2,NOW(),NOW());

USE f8_backend_k1;

SELECT * FROM posts;
SELECT * FROM users;
SELECT * FROM groups;