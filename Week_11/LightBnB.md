<!-- @format -->

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
