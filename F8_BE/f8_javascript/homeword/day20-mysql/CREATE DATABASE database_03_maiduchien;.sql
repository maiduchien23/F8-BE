CREATE DATABASE database_03_maiduchien;
USE database_03_maiduchien;

CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(255),
    original_price DECIMAL(10, 2),
    sale_price DECIMAL(10, 2),
    description TEXT,
    quantity_in_stock INT,
    usage_instructions TEXT,
    create_at TIMESTAMP,
    update_at TIMESTAMP
);

CREATE TABLE attributes (
    attribute_id INT PRIMARY KEY,
    attribute_name VARCHAR(255),
    create_at TIMESTAMP,
    update_at TIMESTAMP
);

CREATE TABLE attribute_values (
    value_id INT PRIMARY KEY,
    attribute_id INT,
    value VARCHAR(255),
    create_at TIMESTAMP,
    update_at TIMESTAMP,
    FOREIGN KEY (attribute_id) REFERENCES attributes(attribute_id)
);

CREATE TABLE product_attributes (
    product_id INT,
    attribute_id INT,
    value_id INT,
    create_at TIMESTAMP,
    update_at TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (attribute_id) REFERENCES attributes(attribute_id),
    FOREIGN KEY (value_id) REFERENCES attribute_values(value_id)
);

INSERT INTO products VALUES
(1, 'SP 1', 100, 80, 'Mo ta san pham 1', 10, 'Huong dan su dung san pham 1', NOW(),NOW()),
(2, 'SP 2', 200, 150, 'Mo ta san pham 2', 5, 'Huong dan su dung san pham 2', NOW(),NOW()),
(3, 'SP 3', 50, 40, 'Mo ta san pham 3', 20, 'Huong dan su dung san pham 3', NOW(),NOW());

INSERT INTO attributes VALUES
(1, 'Mau Sac',NOW(),NOW()),
(2, 'Kich Thuoc',NOW(),NOW());

INSERT INTO attribute_values VALUES
(1, 1, 'Do',NOW(),NOW()),
(2, 2, 'M',NOW(),NOW()),
(3, 1, 'Xanh',NOW(),NOW()),
(4, 2, 'L',NOW(),NOW()),
(5, 1, 'Vang',NOW(),NOW()),
(6, 2, 'S',NOW(),NOW());

INSERT INTO product_attributes VALUES
(1, 1, 1,NOW(),NOW()),
(1, 2, 2,NOW(),NOW()),
(2, 1, 3,NOW(),NOW()),
(2, 2, 4,NOW(),NOW()),
(3, 1, 5,NOW(),NOW()),
(3, 2, 6,NOW(),NOW());


SELECT * FROM products;


SELECT products.product_name AS 'Ten san pham', attributes.attribute_name AS 'Thuoc Tinh', attribute_values.value
FROM products, attributes, product_attributes, attribute_values
WHERE products.product_id = product_attributes.product_id
    AND attributes.attribute_id = product_attributes.attribute_id
    AND attribute_values.value_id = product_attributes.value_id
    AND products.product_id = 1;


SELECT * FROM products WHERE quantity_in_stock > 0;

