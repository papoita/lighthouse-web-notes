<!-- @format -->

January 10, 15, 16 2022

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

# Group by

GROUP BY allows us to combine the results based on a column so an aggregate can be applied to each group.

for all submissions

SELECT count(assignment_submissions.\*) as total_submissions
FROM assignment_submissions;

but if you want per student

SELECT students.name as student, count(assignment_submissions.\*) as total_submissions
FROM assignment_submissions
JOIN students ON students.id = student_id
GROUP BY students.name;

or group by currently enrolled students

SELECT students.name as student, count(assignment_submissions.\*) as total_submissions
FROM assignment_submissions
JOIN students ON students.id = student_id
WHERE students.end_date IS NULL
GROUP BY students.name;

# HAving

HAVING allows us to filter our results based on the result of an aggregate function.

Works on aggreagated data

students whose total submission is less than 100

SELECT students.name as student, count(assignment*submissions.*) as total*submissions
FROM assignment_submissions
JOIN students ON students.id = student_id
WHERE students.end_date IS NULL
GROUP BY students.name
HAVING count(assignment_submissions.*) < 100;

# Show table schema

psql
\c database

\d users

# TIPS FROM SQL in JS

- sign changes the value from a string to an integer

```
 if (options.minimum_rating) {
    values.push(+options.minimum_rating);
    sql += ` HAVING AVG(property_reviews.rating) >= $${values.length}`;
  }
```

i allows for search both capital and low case letters removes case sensitivity

```
console.log(options);
  if (options.city) {
    values.push(`%${options.city}%`);
    sql += ` AND city iLIKE $${values.length}`;
  }
```

# To get the latest entry

evernote for notes
FROM properties ORDER BY id DESC LIMIT 1
