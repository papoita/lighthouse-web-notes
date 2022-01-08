<!-- @format -->

January 8, 2022

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
