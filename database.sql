CREATE DATABASE CRUD_GUSTAVO;

USE CRUD_GUSTAVO;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'user') NOT NULL
);

CREATE TABLE categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);

CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    quantidade INT NOT NULL,
    categoria INT NOT NULL,
    FOREIGN KEY (categoria) REFERENCES categorias(id)
);

CREATE TABLE vendas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    vtotal DECIMAL (10,2) NOT NULL,
    data_venda DATE NOT NULL,
    usuario INT NOT NULL,
    produto INT NOT NULL,
    quantidade INT NOT NULL,
    FOREIGN KEY (produto) REFERENCES produtos(id),
    FOREIGN KEY (usuario) REFERENCES users(id),
);
