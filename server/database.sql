CREATE DATABASE todo_db;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    registration_date VARCHAR(255) NOT NULL
);

CREATE TABLE projects(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    user_id INTEGER REFERENCES users(id)
);
