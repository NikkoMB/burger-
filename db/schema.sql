CREATE DATABASE IF NOT EXISTS burger_db;
DROP TABLE IF EXISTS burger_db; 
REPAIR TABLE burger_db; 
USE burger_db;
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(250) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);