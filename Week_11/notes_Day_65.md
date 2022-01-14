<!-- @format -->

January 14, 2022

# Bootcamp assignment

## to create table

CREATE TABLE assignments (
id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR(255),
content TEXT,
day INTEGER,
chapter INTEGER,
duration INTEGER
);

## to save fake data inm table

wget http://bit.ly/2N1uWQy -O seeds/assignments_seeds.sql

## run sql files against bootcamp database - inlcude them

spsql

\i seeds/assignments_seeds.sql

## to test data input

SELECT count(\*) FROM assignment_submissions;
