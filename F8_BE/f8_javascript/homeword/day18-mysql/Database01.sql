CREATE DATABASE database_01_tenhocvien;

USE database_01_tenhocvien;

CREATE TABLE courses (
    id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    price FLOAT,
    detail TEXT,
    teacher_id INT NOT NULL,
    active INT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP 
);

ALTER TABLE courses ADD description TEXT NULL AFTER price;

ALTER TABLE courses CHANGE COLUMN detail content TEXT NOT NULL;


CREATE TABLE teacher (
    id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    bio TEXT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);


INSERT INTO teacher (id, name, bio, created_at, updated_at)
VALUES (1, 'Giang vien 1', 'Bio giang vien 1', NOW(), NOW());

INSERT INTO teacher (id, name, bio, created_at, updated_at)
VALUES (2, 'Giang vien 2', 'Bio giang vien 2', NOW(), NOW());

INSERT INTO teacher (id, name, bio, created_at, updated_at)
VALUES (3, 'Giang vien 3', 'Bio giang vien 3', NOW(), NOW());



INSERT INTO courses (id, name, price, description, content, teacher_id, active, created_at, updated_at)
VALUES (1, 'Khoa hoc A', 100, 'Mo ta khoa hoc 1A', 'Noi dung khoa hoc 1A', 1, 1, NOW(), NOW());

INSERT INTO courses (id, name, price, description, content, teacher_id, active, created_at, updated_at)
VALUES (2, 'Khoa hoc B', 150, 'Mo ta khoa hoc 1B', 'Noi dung khoa hoc 1B', 1, 1, NOW(), NOW());

INSERT INTO courses (id, name, price, description, content, teacher_id, active, created_at, updated_at)
VALUES (3, 'Khoa hoc C', 200, 'Mo ta khoa hoc 1C', 'Noi dung khoa hoc 1C', 1, 1, NOW(), NOW());


INSERT INTO courses (id, name, price, description, content, teacher_id, active, created_at, updated_at)
VALUES (4, 'Khoa hoc D', 120, 'Mo ta khoa hoc 2A', 'Noi dung khoa hoc D', 2, 1, NOW(), NOW());

INSERT INTO courses (id, name, price, description, content, teacher_id, active, created_at, updated_at)
VALUES (5, 'Khoa hoc E', 180, 'Mo ta khoa hoc 2B', 'Noi dung khoa hoc E', 2, 1, NOW(), NOW());

INSERT INTO courses (id, name, price, description, content, teacher_id, active, created_at, updated_at)
VALUES (6, 'Khoa hoc F', 250, 'Mô tả khóa học 2C', 'Noi dung khoa hoc F', 2, 1, NOW(), NOW());


INSERT INTO courses (id, name, price, description, content, teacher_id, active, created_at, updated_at)
VALUES (7, 'Khoa hoc G', 90, 'Mo ta khoa hoc 3A', 'Noi dung khoa hoc G', 3, 1, NOW(), NOW());

INSERT INTO courses (id, name, price, description, content, teacher_id, active, created_at, updated_at)
VALUES (8, 'Khoa hoc H', 130, 'Mo ta khoa hoc 3B', 'Noi dung khoa hoc H', 3, 1, NOW(), NOW());

INSERT INTO courses (id, name, price, description, content, teacher_id, active, created_at, updated_at)
VALUES (9, 'Khoa hoc I', 170, 'Mo ta khoa hoc 3C', 'Noi dung khoa hoc I', 3, 1, NOW(), NOW());



UPDATE courses SET name = 'Khoa hoc A1', price = 300 WHERE id = 1;
UPDATE courses SET name = 'Khoa hoc B1', price = 350 WHERE id = 2;
UPDATE courses SET name = 'Khoa hoc C1', price = 400 WHERE id = 3;

UPDATE courses SET name = 'Khoa hoc D2', price = 420 WHERE id = 4;
UPDATE courses SET name = 'Khoa hoc E2', price = 450 WHERE id = 5;
UPDATE courses SET name = 'Khoa hoc F2', price = 470 WHERE id = 6;

UPDATE courses SET name = 'Khoa hoc G3', price = 480 WHERE id = 7;
UPDATE courses SET name = 'Khoa hoc H3', price = 490 WHERE id = 8;
UPDATE courses SET name = 'Khoa hoc I3', price = 500 WHERE id = 9;

UPDATE teacher SET bio = 'Bio moi cho giang vien 1' WHERE id = 1;
UPDATE teacher SET bio = 'Bio moi cho giang vien 2' WHERE id = 2;
UPDATE teacher SET bio = 'Bio moi cho giang vien 3' WHERE id = 3;

SELECT * FROM teacher;

SELECT * FROM courses;








