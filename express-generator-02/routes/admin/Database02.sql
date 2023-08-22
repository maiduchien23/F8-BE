-- CREATE DATABASE f8_backend_k1;

-- CREATE TABLE users (
--     id int,
--     name varchar(50),
--     email varchar(100),
--     password varchar(100),
--     status tinyint(1),
--     create_at datetime,
--     update_at datetime
-- )

-- use f8_backend_k1;
-- DESCRIBE users;

-- Sửa bảng

--1. Thêm cột mới
-- use f8_backend_k1;
-- ALTER TABLE users ADD phone varchar(15) AFTER status;

--2. Sửa cột 
-- use f8_backend_k1;
-- -- ALTER TABLE users MODIFY COLUMN phone varchar(20);

-- -- ALTER TABLE users RENAME COLUMN phone TO phone_number;

-- ALTER TABLE users CHANGE COLUMN phone_number phone varchar(15);

--3. Xóa cột
-- use f8_backend_k1;
-- ALTER TABLE users DROP COLUMN phone;
