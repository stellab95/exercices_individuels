CREATE TABLE edusign (
	id INTEGER PRIMARY KEY,
	firstname TEXT NOT NULL,
	lastname TEXT NOT NULL,
	email TEXT NOT NULL UNIQUE,
    created_at DATETIME NOT NULL
);

INSERT INTO edusign (firstname, email, created_at)
 VALUES
 ('Ada', 'ada@adatechschool.com', '24-05-08 09:30:00'),
 ('Grace', 'grace@adatechschool.com', '24-05-08 09:30:00'),
 ('Dorothy', 'dorothy@adatechschool.com', '24-05-08 09:30:00'),
 ('Ella', 'ella@adatechschool.com','24-05-08 09:30:00');

ALTER TABLE edusign ADD COLUMN user_id INTEGER;

CREATE TABLE users_ada (
    id INTEGER PRIMARY KEY,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
    FOREIGN KEY (user_id) REFERENCES users_ada(id);
);

INSERT INTO users_ada (firstname, lastname, email) VALUES ('Ada', 'Lovelace', 'ada@test.fr');
INSERT INTO users_ada (firstname, lastname, email) VALUES ('Beatrice', 'Worsley', 'bea@test.fr');
INSERT INTO users_ada (firstname, lastname, email) VALUES ('Bella', 'Guerin', 'bella@test.fr');
INSERT INTO users_ada (firstname, lastname, email) VALUES ('Barbara', 'Chase', 'barbara@test.fr');


