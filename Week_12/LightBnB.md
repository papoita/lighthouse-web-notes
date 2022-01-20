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

## datatypes

https://www.postgresql.org/docs/9.3/datatype.html

SMALLINT, INTEGER, BIGINT, DECIMAL, NUMERIC, REAL, DOUBLE, SMALLSERIAL, SERIAL, BIGSERIAL.

https://www.postgresqltutorial.com/postgresql-data-types/
