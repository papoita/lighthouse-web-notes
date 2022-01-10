<!-- @format -->

January 8, 9 2022

# SQL and relational databases

https://www.lynda.com/Software-Development-tutorials/What-databases/412845/438414-4.html

- Give structure and make it useful
- While some spreadsheets can simulate this capability with lookup functions, the ability to create relationships between tables is a core function of relational databases.
  -see gaps in data= pieces of information are arranged in a consistent way, it becomes easier to see what information you have.
  -The database's schema includes the information about the layout of tables and other information about the database itself.

## relational databases

tables
rows -instances
column - attributes (datatypes such as number, text, date, true/false, binary data))
sett of columns -relationship
can add a key or unique ID (synthetic key, composite Key, foreign Key)

## types of relationships

1. one to many
2. many to many
3. one to one

## acid and transactions

transactions : high complxity, few steps so if one step is not completed then if error interrruts the process then no changes are made to the databases
A atomic
C consitent
I isoalted
D durable

Durability requires that data changed by the transaction is written to the database.
Even though you now know atoms can be broken down into smaller parts, the term atomic means that something can't be broken down into smaller pieces. Here, atomicity means that the transaction behaves as one single action.

# SQL

data manipulation language
managing data in tables
talk to databases
structure query language

ANSI SQL (amercian standards)

MySQL (open source)

writes statements and interacts with data

DDL data defiunition languafe
DCL data control language

Unique values are useful because they never appear twice. If a value appears more than once in a given column, it's not unique in that column.
Even though a relationship is concerned with individual rows, a relationship is defined as being between tables in the same databas
Any piece of data that uniquely represents a row is a candidate key, and if you have a value that occurs in the data naturally, that's a natural key.
relation: a set of attributes (columns) that describe information about specific instances (rows) of an entity
Correct
You may also see the rows called "tuples."

indicates a row, or a record, which contains information pertaining to one instance of an entity.

### SQL statement

Each keyword, SELECT and FROM, defines a single clause.

-Clause
-predicate
-expression

SELECT .... FROM (keywords in uppercase)

Create
Read
Update
Delete

# Entity relationship Diagram (ER diagram)

diagram uses tables field and relationships to plan a database

# relationsal databases for dummies

https://code.tutsplus.com/tutorials/relational-databases-for-dummies--net-30244

duplicates make CRUD operations more challenging

normalization: removed repetition accross column and rows by creating dif tables, and chose meaningful primary keys to link the tables together

## RDBMS (relational database managment systems)

SQlite
PostgresQL
All SQL database systems support the same fundamental SQL syntax, which is the more important thing to learn. E

# Visualizing databases

## Entity relationship diagrams

shows each table as a box and line forms

Entity : represents person, place of thing you want to track
instance: row each individual of entity
Attribute: columns tells more about each instance of individual can be unique
Primary Key: attribute or group of attribute must be unique
Relationship: describes how entities interact with each other : cna be a verb -association (has, )
Cardinality: count of instances that are allowed or necessary between entity relationships (how many rows from a table to be able to look in another table) minimum and maximum
-- crow's foot notation:
