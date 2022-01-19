<!-- @format -->

Jan 18, 2022
Week 12 started

Reading and writing application data using SQL
Async execution of queries (using pg library with promises)
Sanitization of user input (how and why)

https://en.wikipedia.org/wiki/Database_design

# Database normalization

reduce duplicates
whether the information in the database has internal redundancies, and whether the dependencies across the different tables in the database are logically organized.

# First normal Form

no table contains multiple columns that you could use to gt the same information

there may be redundant information across multiple rows, but each row will be unique.

# Second normal Form

To achieve second normal form, it would be helpful to split out the pets into an independent table, and match them up using the student names as foreign keys.

# Third normal Form

Third normal form would suggest making sure each non-key element in each table provides information about the key in the row.

unique primary key

# Fourth normal From

add a third table of relationships

To enforce data integrity reduce duplication, and make it easier to manage our data

# Relationships Between table

## one to many

A cohort has many students

in JS:

const cohort = {
name: "FEB02",
students: ["Armand Hilll", "Stephanie Wolff"]
};

in ERD
single row that contains a single value to a single table. We place a foreign key on the students table that points to a record in the cohorts table

## Foreign KEy

A foreign key is a field in one table that refers to a primary key in another table. is on the many side

# relations video

https://youtu.be/4q-keGvUnag

# ERD naming convention

Use snake_case for table and column names.
Pluralize tables names, column names should be singular.
Call your primary key id.
For most foreign keys use <table>\_id.

key information that must be present in an ERD:

Names of the Entities.
Attributes / properties for the Entities.
The relations between each entity.
