<!-- @format -->

January 18, 19,
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
