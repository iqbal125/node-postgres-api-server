

CREATE TABLE users (
  id integer PRIMARY KEY,
  username VARCHAR(255) UNIQUE,
  email VARCHAR(255)
);

CREATE TABLE todos (
  todo_id integer PRIMARY KEY,
  title VARCHAR(255),
  description VARCHAR(1000),
  author VARCHAR(255) REFERENCES users(username)
);


