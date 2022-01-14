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
