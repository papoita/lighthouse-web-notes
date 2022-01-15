<!-- @format -->

Jan 15, 2022

diagram.drawio

rows -records and refer back to the parent table with a parent-key
app.diagrams.net

dbdiagram.io - reverse engineering ruby, postgresQL
you can export into postgresql, friendly sql files

lightbnb uses

airtable

columns are predefined and rows are your actual data

represents various entities/nouns within DOMAIN MODEL

lower case underscore pluralized names for tables
eg. survey_results

# relationship types

one to many
one to one
many to many (always requires a 3rd table (glue table, bridge table))

separate data similar to how you separate code

## keys

### Primary key

unique thing representing a row
eg. Biginteger starting at 1 calld "id" for all of our tables
they are inmutable should not change.. reason why email is not great

### Foreign Keys

FK these are on the child tables to point to parent table's they should match the PK in trms of data type eg. "order_id" pointing to orders.id

## Data types

numbers (floats, integers), strings (varchar(n), text), boolean, (date, datetimes, tz), enums,

Foreign key table is the many side
