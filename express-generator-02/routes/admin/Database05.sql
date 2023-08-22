-- Tạo bảng dựa vào 1 bảng khác
use f8_backend_k1;
--CREATE TABLE customers LIKE users;

-- DROP TABLE users;
-- DROP TABLE customers;
-- DROP TABLE products;

CREATE TABLE users(
    id int NOT NULL,
    name varchar(100),
    email varchar(100) NOT NULL,
    password varchar(100) NOT NULL
);

INSERT INTO users (id,name,email,password) VALUES (NULL,'Hoàng An','hoangan@gmail.com','123456');

SELECT * FROM users;
