
-- DROP TABLE products;
use f8_backend_k1;
CREATE TABLE products (
    id int,
    name varchar(50),
    content text,
    price float,
    sale_price float,
    status tinyint(1),
    create_at datetime,
    update_at datetime
);

ALTER TABLE products ADD description text AFTER sale_price;

ALTER TABLE products ADD promotion text AFTER description;

ALTER TABLE products RENAME COLUMN price to regular_price;

INSERT INTO products (id,name,content,regular_price,sale_price,description,promotion,status,create_at,update_at) 
VALUES(1,'iphone 12','abc','25000000','19000000','blue','aaa',1,'2023-08-21 09:00:00','2023-08-21 09:00:00');
INSERT INTO products (id,name,content,regular_price,sale_price,description,promotion,status,create_at,update_at) 
VALUES(2,'iphone 11','abcd','20000000','17000000','red','bbb',1,'2023-08-21 09:00:00','2023-08-21 09:00:00');
INSERT INTO products (id,name,content,regular_price,sale_price,description,promotion,status,create_at,update_at) 
VALUES(3,'iphone 13','abce','30000000','26000000','black','ccc',1,'2023-08-21 09:00:00','2023-08-21 09:00:00');


SELECT * FROM products;

