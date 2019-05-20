BEGIN;

    DROP TABLE IF EXISTS users
    CASCADE;
DROP TABLE IF EXISTS goals
CASCADE;
DROP TABLE IF EXISTS time
CASCADE;
DROP TABLE IF EXISTS users_goals
CASCADE;
DROP TABLE IF EXISTS users_time
CASCADE;
DROP TABLE IF EXISTS users_location
CASCADE;

CREATE TABLE users
(
    users_id SERIAL PRIMARY KEY,
    users_name VARCHAR(50) NOT NULL,
    age INT NOT NULL,
    gender TEXT NOT NULL,
    location TEXT NOT NULL,
    experience TEXT NOT NULL,
    photo TEXT NOT NULL
);

CREATE TABLE goals
(
    goals_id SERIAL PRIMARY KEY,
    goals_name VARCHAR NOT NULL
);

CREATE TABLE time
(
    time_id SERIAL PRIMARY KEY,
    time_name VARCHAR NOT NULL
);

CREATE TABLE users_goals
(
    users_id INTEGER REFERENCES users(users_id),
    goals_id INTEGER REFERENCES goals(goals_id)
);

CREATE TABLE users_time
(
    users_id INTEGER REFERENCES users(users_id),
    time_id INTEGER REFERENCES time(time_id)
);

CREATE TABLE users_location
(
    users_id INTEGER REFERENCES users(users_id),
    latitude INTEGER,
    longitude INTEGER
);

INSERT INTO users
    (users_name, age, gender, location, experience, photo)
VALUES
    ('Henry Stockdale', 25, 'Male', 'London', 'Beginner', ''),
    ('Ryan McAvoy', 28, 'Male', 'London', 'Beginner', ''),
    ('Banna Teklebrhan', 29, 'Female', 'London', 'Beginner', ''),
    ('Dylan Almano', 27, 'Male', 'London', 'Beginner', '');

INSERT INTO goals
    (goals_name)
VALUES
    ('Keeping Fit'),
    ('Lose Weight'),
    ('Build Muscle'),
    ('Sport Specific');

INSERT INTO time
    (time_name)
VALUES
    ('Morning'),
    ('Afternoon'),
    ('Evening'),
    ('Flexible');

INSERT INTO users_goals
(users_id, goals_id)
VALUES 
    (1, 2),
    (1, 4),
    (2, 1),
    (2, 2),
    (3, 2),
    (3, 4),
    (4, 2),
    (4, 1);

INSERT INTO users_time
(users_id, time_id)
VALUES
    (1, 2),
    (1, 4),
    (2, 1),
    (2, 2),
    (3, 2),
    (3, 4),
    (4, 2),
    (4, 1);

COMMIT;