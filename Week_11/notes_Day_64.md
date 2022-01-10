<!-- @format -->

January 10, 2022

# SQL introduction

1970's
SEQUEL
Data retrieval
It is a dclarative language
tutorial

https://www.khanacademy.org/computing/computer-programming/sql

## create table

CREATE TABLE groceries (id INTEGER PRIMARY KEY, name TEXT, quantity INTEGER);

INSERT INTO groceries VALUES (1, "Bananas", 4);
INSERT INTO groceries VALUES (2, "Peanut", 1);
INSERT INTO groceries VALUES (3, "Chocolate", 2);
SELECT \* FROM groceries;

## Query table

SELECT name FROM groceries ORDER BY aisle;
SELECT \* FROM groceries; //select all items

to filter to order
SELECT \* FROM groceries WHERE aisle > 5 ORDER BY aisle;

## aggregating DATA

SELECT SUM(quantity) FROM groceries;

SELECT MAX(quantity) FROM groceries;

SELECT SUM(quantity) FROM groceries GROUP BY aisle;

SELECT aisle SUM(quantity) FROM groceries GROUP BY aisle;
