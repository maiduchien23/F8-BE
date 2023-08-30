USE f8_backend_k1;

CREATE TABLE products (
    id int PRIMARY KEY,
    name VARCHAR(200),
    price FLOAT DEFAULT 0,
    status TINYINT(1) DEFAULT 1,
    create_at timestamp,
    update_at timestamp
)

USE f8_backend_k1;
DESCRIBE products;

USE f8_backend_k1;
INSERT INTO products(id,name,create_at,update_at) VALUES(1,'SP 1',NOW(),NOW());

USE f8_backend_k1;
SELECT * FROM products;

USE f8_backend_k1;
ALTER TABLE products ALTER status SET DEFAULT 0;

USE f8_backend_k1;
ALTER TABLE products ALTER status DROP DEFAULT;