CREATE DATABASE IF NOT EXISTS `ypostirixi`;
USE `ypostirixi`;

CREATE TABLE IF NOT EXISTS roles (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    role VARCHAR(255) NOT NULL
);

INSERT INTO roles(role) VALUES ('Admin');
INSERT INTO roles(role) VALUES ('Client');

CREATE TABLE IF NOT EXISTS users (
    uuid VARCHAR(36) PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role INT NOT NULL DEFAULT 2
    FOREIGN KEY (role)
        REFERENCES roles(id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE
);

INSERT INTO users (uuid, name, email, password, role) VALUES (
    UUID(),
    'Master',
    'master@admin.com',
    '$2y$10$KRLRIDQdVkjvHEUuVL1R5.cZv0C8fdTp45wNjFP94fI2aLhRLaQqC', --admin123
    1
);

CREATE TABLE IF NOT EXISTS priority (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    priority VARCHAR(255) NOT NULL
);

INSERT INTO priority (priority) VALUES ('Normal');
INSERT INTO priority (priority) VALUES ('Urgente');

CREATE TABLE IF NOT EXISTS sectors (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    sector VARCHAR(255) NOT NULL
);

INSERT INTO sectors (sector) VALUES ('Marketing');
INSERT INTO sectors (sector) VALUES ('Vendas');
INSERT INTO sectors (sector) VALUES ('Contabilidade');
INSERT INTO sectors (sector) VALUES ('Administração');
