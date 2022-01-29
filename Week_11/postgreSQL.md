<!-- @format -->

January 10, 15, 16 2022

## postgreSQL

https://www.khanacademy.org/computing/computer-programming/sql/more-advanced-sql-queries/pt/querying-in-subqueries

https://www.sqltutorial.org/sql-cheat-sheet/
https://sqlzoo.net/wiki/SELECT_.._SELECT

https://sqlzoo.net/wiki/SELECT_within_SELECT_Tutorial#Richer_than_UK

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

# Sub queries

## column in SELECT

SELECT inside of a SELECT

```
SELECT (
  SELECT count(assignments)
  FROM assignments
)-count(assignment_submissions) as total_incomplete
FROM assignment_submissions
JOIN students ON students.id = student_id
WHERE students.name = 'Ibrahim Schimmel';
```

f a query returns a single value, we can use it in our SELECT statement just like any other value.

SELECT (
SELECT count(\*)
FROM table_name
) as total, other_column
FROM other_table_name
ORDER BY total;

## FROM Sub select table

The result of a select is effectively a table that can be used as you would use a table
So a select statement may be used as a data source of another select statement.

SELECT avg(total_students) as average_students
FROM (
SELECT count(students) as total_students, cohorts.name as cohort_name
FROM students
JOIN cohorts on cohorts.id = cohort_id
GROUP BY cohorts.name
) as totals_table;

# examples quiz sqlzoo.net

SELECT name, ROUND(gdp_per_capita)
FROM
(SELECT name,
gdp/population AS gdp_per_capita
FROM bbc) X
WHERE gdp_per_capita>20000

2.Find the countries in the same region as Bhutan

SELECT name
FROM bbc
WHERE region IN
(SELECT region FROM bbc
WHERE name='Bhutan')

3. Show the countries where the population is greater than 5 times the average for its region

SELECT name
FROM bbc b1
WHERE population>
5\*(SELECT AVG(population) FROM bbc
WHERE region=b1.region)

https://sqlzoo.net/wiki/SELECT_within_SELECT_Tutorial#Richer_than_UK

1. List each country name where the population is larger than that of 'Russia'.

WHERE population >
(SELECT population FROM world
WHERE name='Russia')

2.Show the countries in Europe with a per capita GDP greater than 'United Kingdom'.

SELECT name FROM world WHERE gdp/population >
(SELECT gdp/population FROM world WHERE name = 'United Kingdom');

3.Percentages of Germany
Germany (population 80 million) has the largest population of the countries in Europe. Austria (population 8.5 million) has 11% of the population of Germany.

Show the name and the population of each country in Europe. Show the population as a percentage of the population of Germany.

SELECT name, ROUND(100\*population/(SELECT population FROM world WHERE name= 'Germany'))FROM world WHERE continent = 'Europe';

4. Find the largest country (by area) in each continent, show the continent, the name and the area:

SELECT continent, name, population FROM world x
WHERE population >= ALL
(SELECT population FROM world y
WHERE y.continent=x.continent
AND population>0)

### ROUND

ROUND(7253.86, 0) -> 7254
ROUND(7253.86, 1) -> 7253.9
ROUND(7253.86,-3) -> 7000

###
