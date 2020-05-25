CREATE DATABASE perntodo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(250)
);

ALTER TABLE todo ADD status VARCHAR(10);
ALTER TABLE todo ADD due_date date;
ALTER TABLE todo ADD start_date date;
ALTER TABLE todo ADD remarks VARCHAR(10);