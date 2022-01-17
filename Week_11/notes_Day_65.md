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

# Joining tables

JOIN: used to retrieve data from multiple tables at once

SELECT name, email, cohort_id
FROM students JOIN cohorts;

SELECT students.name as student_name, email, cohorts.name as cohort_name
FROM students JOIN cohorts ON cohort_id = cohorts.id;

# Visual explanation of SQL join

https://blog.codinghorror.com/a-visual-explanation-of-sql-joins/

# Bootcamp queries 2 =JOIN

new file for each individual query

SELECT name, email,cohort_id FROM students JOIN cohorts;
