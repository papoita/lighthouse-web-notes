<!-- @format -->

January 18, 19, 24
We will start by designing the database and creating an ERD for the tables.
Then we will create the database and the tables using the ERD.
We will add some fake data to the database to make testing queries easier.
Then we will start writing queries.
Finally, we will connect the database to a javascript application so that we can interact with the data from a web page.

db reset in package.json in scripts

in psql

\conninfo

# .env

secret or sensitive info
npmjs. package
dotenv file

add to gitignore .env file
require in connection file suing the special syntax
require('dotenv').config();

pool instead of client to use multiple clients

then connect to server

# LECTURE connecting server to db

https://us02web.zoom.us/rec/share/1s4FgzaazyZCuJNOJmx_IHUuzi0qKQsJ9j3lOJA4Scu9f5_T48yjeuaEAUTU6HBY.HfUt0DhqOW5Tv8mG

Passcode: aWJBd20@
https://github.com/clopez11/WebFlex-Lectures-October18

https://github.com/clopez11/WebFlex-Lectures-October18/tree/master/M5/W12

# Data definition language

The SQL commands that we use to define the database schema are sometimes referred to as Data Definition Language (DDL) statements

CREATE, ALTER, and DROP

specify the type of data
CREATE TABLE users (
id INTEGER PRIMARY KEY
);

Had to erase a previous db that existed with this name

DROP database test_db;

# create database

CREATE DATABASE lightbnb

## datatypes

https://www.postgresql.org/docs/9.3/datatype.html

SMALLINT, INTEGER, BIGINT, DECIMAL, NUMERIC, REAL, DOUBLE, SMALLSERIAL, SERIAL, BIGSERIAL.

https://www.postgresqltutorial.com/postgresql-data-types/

### Boolean

boolean

### Character

CHAR(n), VARCHAR(n), and TEXT

### Numeric

INT, SMALLINT, SERIAL
float(n), real, numeric

### Temporal

DATE, TIME, TIMESTAMP, INTERVAL

array

### JSON

### UUID

for storing Universally Unique Identifiers better than serial

Special types such as network address and geometric data.

CREATE TABLE users (
id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR(255),
birth_year DATE,
member_since TIMESTAMP
);

# CREATING TABLES

https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m05w12/activities/761?journey_step=42

# alter tables

https://www.postgresqltutorial.com/postgresql-alter-table/

ALTER TABLE users ADD COLUMN name VARCHAR(255), ADD COLUMN birth_year SMALLINT, ADD COLUMN member_since TIMESTAMP;

# Remove table

DROP TABLE IF EXISTS users CASCADE;

# alter to set a default

ALTER TABLE users
ALTER COLUMN member_since
SET DEFAULT Now();

# final users table

CREATE TABLE users (
id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
birth_year SMALLINT NOT NULL,
member_since TIMESTAMP NOT NULL DEFAULT Now()
);

# add users

INSERT INTO users (name, birth_year)
VALUES ('Susan Hudson', 2000),
('Malloy Jenkins', 1000);

# create pets table

that also when the owner is deleted the pet is deleted too

CREATE TABLE pets (
id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
owner_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE
);

# insert one table using another table

INSERT INTO first_table_name [(column1, column2, ... columnN)]
SELECT column1, column2, ...columnN
FROM second_table_name
[WHERE condition];

# DELETE conditions

DELETE FROM table_name
WHERE [condition];

You can combine N number of conditions using AND or OR operators.

# Update

UPDATE students
SET name='Callisto Caiazzo', email='ccaiazzo@gmail.com', github='callcazz'
WHERE id = 3;

///

# Conect database to web aplication

use library node-postgres
https://node-postgres.com/

using promises

## make a dir and initiate npm

note: replace bootcamp by lightbnb
mkdir bootcamp_app
cd bootcamp_app
touch students.js
npm init -y

We will connect to our database from the students.js file.

## .gitignore file

https://raw.githubusercontent.com/github/gitignore/master/Node.gitignore

# install postgres

npm install pg

# connect using the client psql

When we're using terminal to execute SQL queries, we first have to connect to the database using a client app like psql. If we wanted to connect to the bootcampx database, we could enter psql bootcampx into terminal. This will connect us to a PostgreSQL database running on localhost port 5432 with the user vagrant.

psql -h localhost -p 5432 -U vagrant bootcampx

Go into psql
Run \password
Type 123 and hit Enter

# in students.js

## without specifying options

const { Pool } = require('pg');

const pool = new Pool();

## For bootcamp exercise

### connect to database

manage multiple clients

const { Pool } = require('pg');

const pool = new Pool({
user: 'vagrant',
password: '123',
host: 'localhost',
database: 'bootcampx'
});

### add queries

pool.query(`SELECT id, name, cohort_id FROM students LIMIT 5;`)
.then(res => {
console.log(res);
})
.catch(err => console.error('query error', err.stack));

# execute queries

make sure you are connected to teh correct database where all your relations have been created

node file.js
in this case node students.js

When we make the query from our JavaScript application, the results come back as JavaScript objects. That means that once the .then(res => {}) gets executed, we're not dealing with SQL or the database any more, we're just dealing with JavaScript objects.

# use query results to print out info

pool.query(`SELECT students.id as student_id, students.name as name, students.cohort_id as cohort_id, cohorts.name as cohort FROM students JOIN cohorts ON cohort_id = cohorts.id LIMIT 5;`)
.then(res => {
res.rows.forEach(user=>{
console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort_id} cohort named ${user.cohort}`);
});
})
.catch(err => console.error('query error', err.stack));

# modify the node file.js command

making the app more dynamic for the user

// const myArgs = process.argv.slice(2);
// console.log('myArgs: ', myArgs);

pool.query(`SELECT students.id as student_id, students.name as name, cohorts.name as cohort FROM students JOIN cohorts ON cohorts.id = cohort_id WHERE cohorts.name LIKE '%${process.argv[2]}%' LIMIT ${process.argv[3] || 5};`)

# protect query against SQL injection

The numbering starts at 1 instead of 0, so the first value in the query $1 corresponds to the first value in the array values[0]

pool.query(queryString, values);

const queryString = `SELECT students.id as student_id, students.name as name, cohorts.name as cohort FROM students JOIN cohorts ON cohorts.id = cohort_id WHERE cohorts.name LIKE $1 LIMIT $2;`;

const cohortName = process.argv[2];
const limit = process.argv[3] || 5;
// Store all potentially malicious values in an array.
const values = [`%${cohortName}%`, limit];
