<!-- @format -->

January 10, 2022

## postgreSQL

https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m05w11/activities/716?journey_step=41&workbook=15

in vagrant psql

CREATE DATABASE test_db;

CREATE TABLE famous_people (
id SERIAL PRIMARY KEY,
first_name VARCHAR(50),
last_name VARCHAR(50),
birthdate DATE
);

INSERT INTO famous_people (first_name, last_name, birthdate)
VALUES ('Abraham', 'Lincoln', '1809-02-12');
INSERT INTO famous_people (first_name, last_name, birthdate)
VALUES ('Mahatma', 'Gandhi', '1869-10-02');
INSERT INTO famous_people (first_name, last_name, birthdate)
VALUES ('Paul', 'Rudd', '1969-04-06');
INSERT INTO famous_people (first_name, last_name, birthdate)
VALUES ('Paul', 'Giamatti', '1967-06-06');

SELECT \* FROM famous_people;

SELECT \* FROM famous_people WHERE birthdate >= '1920-01-01';

SELECT \* FROM famous_people WHERE birthdate < '1920-01-01';

SELECT \* FROM famous_people WHERE first_name = 'Paul';

SELECT count(\*) FROM famous_people ;

# cReated bootcampx database

cd to repo
psql
\c bootcampx; //to open it

From your psql session, type \i migrations/students_cohorts.sql
Now enter \dt into your psql session to make sure the two tables have been created.

after creating the empty tables

download fake data using wget
wget http://bit.ly/2Z0fN4t -O seeds/students.sql

wget http://bit.ly/300nIQy -O seeds/cohorts.sql

# BootcampX workflow

https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m05w11/activities/719?journey_step=41

1. new spql file

2. write the query

3.execute psql

4. \i file

# Bootcamp X queries challenge

1. \i 1_queries/1_students_in_cohort.sql

to exit
\q

# Join tables - INNER JOIN

inner join only gives rows were there is a match between the two tables
students with cohort_id NULL will not appear in a inner Join

SELECT students.name as student_name, email, cohorts.name as cohort_name
FROM students JOIN cohorts ON cohort_id = cohorts.id;

OR (order doesn't matter)

SELECT students.name as student_name, email, cohorts.name as cohort_name
FROM cohorts JOIN students ON cohort_id = cohorts.id;

OR with INNER JOIN

SELECT students.name as student_name, email, cohorts.name as cohort_name
FROM students INNER JOIN cohorts ON cohorts.id = cohort_id;

# OUTER JOIN (LEFT, RIGHT, FULL)

1. FROM students LEFT OUTER JOIN cohorts ON cohorts.id = cohort_id;
   The first query will return all students because students is to the LEFT of the word JOIN.

2. FROM students RIGHT OUTER JOIN cohorts ON cohorts.id = cohort_id;
   second query will return all of the cohorts because cohorts is to the RIGHT of the word JOIN.

3. FROM students FULL OUTER JOIN cohorts ON cohorts.id = cohort_id;
   third query will return all rows from both tables, even when there is no match.
