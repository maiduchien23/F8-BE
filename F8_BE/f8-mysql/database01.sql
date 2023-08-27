USE f8_backend_k1;

CREATE TABLE users (
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    CONSTRAINT users_email_id_unique UNIQUE(email) 
);

USE f8_backend_k1;
DESCRIBE users;

-- USE f8_backend_k1;
-- INSERT INTO users (id,name,email,password) VALUES (1,'hien','hien@gmail.com','123456');

-- USE f8_backend_k1; 
-- ALTER TABLE users ADD CONSTRAINT users_email_id_unique UNIQUE(email,id);

-- USE f8_backend_k1;
-- SELECT * FROM users;

-- USE f8_backend_k1;
-- DROP TABLE users;

-- USE f8_backend_k1;
-- ALTER TABLE users DROP PRIMARY KEY;

USE f8_backend_k1;
ALTER TABLE users ADD PRIMARY KEY(id);