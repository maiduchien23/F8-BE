USE f8_backend_k1;

CREATE INDEX products_status_index ON products(status);

USE f8_backend_k1;
ALTER TABLE products DROP INDEX products_status_index;