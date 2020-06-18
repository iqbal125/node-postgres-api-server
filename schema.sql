

CREATE TABLE users (
  id integer PRIMARY KEY,
  username VARCHAR(255) UNIQUE,
  email VARCHAR(255)
);