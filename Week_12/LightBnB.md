<!-- @format -->

# database cretaion

CREATE DATABASE lightbnb;
\c lightbnb

# table creation

Define the tables in order of least dependent to most dependent (i.e least number of foreign keys to greatest number of foreign keys).

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS properties CASCADE;
DROP TABLE IF EXISTS reservations CASCADE;
DROP TABLE IF EXISTS property_reviews CASCADE;

CREATE TABLE users (
id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL
);

CREATE TABLE properties (
id SERIAL PRIMARY KEY NOT NULL,
owner_id INTEGER REFERENCES users(id) ON DELETE CASCADE,

title VARCHAR(255) NOT NULL,
description TEXT,
thumbnail_photo_url VARCHAR(255) NOT NULL,
cover_photo_url VARCHAR(255) NOT NULL,
cost_per_night INTEGER NOT NULL DEFAULT 0,
parking_spaces INTEGER NOT NULL DEFAULT 0,
number_of_bathrooms INTEGER NOT NULL DEFAULT 0,
number_of_bedrooms INTEGER NOT NULL DEFAULT 0,

country VARCHAR(255) NOT NULL,
street VARCHAR(255) NOT NULL,
city VARCHAR(255) NOT NULL,
province VARCHAR(255) NOT NULL,
post_code VARCHAR(255) NOT NULL,

active BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE reservations (
id SERIAL PRIMARY KEY NOT NULL,
start_date DATE NOT NULL,
end_date DATE NOT NULL,
property_id INTEGER REFERENCES properties(id) ON DELETE CASCADE,
guest_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE property_reviews (
id SERIAL PRIMARY KEY NOT NULL,
guest_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
property_id INTEGER REFERENCES properties(id) ON DELETE CASCADE,
reservation_id INTEGER REFERENCES reservations(id) ON DELETE CASCADE,
rating SMALLINT NOT NULL DEFAULT 0,
message TEXT
);

# run the schema (insert table)

\i migrations/01_schema.sql

# add data in folder seeds

this has issues...

INSERT INTO reservations (id, start_date, end_date, property_id, guest_id)
VALUES (1, '2018-09-11', '2018-09-26', 1, 1),(2, '2019-01-04', '2019-02-01', 2, 2),
(3, '2021-10-01', '2021-10-14', 3, 3);

INSERT INTO users (name, email, password)
VALUES (('Eva Stanley', 'evastanley@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),('Jackson Rose', 'jacksonrose@hotmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),('Sue Luna', 'sueluna@gmx.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

INSERT INTO properties (owner_id, title, description, cover_photo_url, thumbnail_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, active, province, city, country, street, post_code)
VALUES (1, 'Speed Lamp', 'description', 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg', 93061, 6, 4, 8, 'Canada', '536 Namsub Highway', 'Sotboske', 'Quebec', 28142, true),(2, 'Blank corner', 'description', 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg', 85234, 6, 5, 7, 'Canada', '651 Nami Road', 'Bohbatev', 'Alberta', 83680, true),(3, 'Habit mix', 'description', 'https://images.pexels.com/photos/2080018/pexels-photo-2080018.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2080018/pexels-photo-2080018.jpeg', 46058, 1, 2, 3, 'Canada', '1650 Hejto Center', 'Genwezuj', 'Ontario', 38051, true);

INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message)
VALUES (1, 181, 1019769, 3, 'messsages'),(2, 181, 1019769, 3, 'messsages'),(3, 181, 1019769, 3, 'messsages');

## insert

\i seeds/01_seeds.sql;

## ACTION CAUTION

added the i schema and seeds in vagrant!!!

had to update property-reviews manually
UPDATE property_reviews
SET guest_id= 1, property_id= 1, reservation_id= 1, rating= 1, message= 'message'
WHERE id = 1;

INSERT INTO property_reviews (guest_id,
property_id,
reservation_id,
rating,
message)
VALUES (1, 1, 1, 1, 'messages'),(2, 2, 2, 2, 'messages'),(3, 3, 3, 3, 'messages');

# manually netered data

INSERT INTO users (name,
email,
password)
VALUES ('Eva Stanley', 'evastanley@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),('Jackson Rose', 'jacksonrose@hotmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),('Sue Luna', 'sueluna@gmx.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

INSERT INTO properties (owner_id,
title, description,
thumbnail_photo_url,
cover_photo_url,
cost_per_night,
parking_spaces,
number_of_bathrooms,
number_of_bedrooms,
country,
street,
city,
province,
post_code,
active)
VALUES (1, 'Speed Lamp', 'description', 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg', 93021, 6, 4, 8, 'Canada', '536 Namsub Highway', 'Sotboske', 'Quebec', 28142, true),(2, 'Blank corner', 'description', 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg', 85234, 6, 5, 7, 'Canada', '651 Nami Road', 'Bohbatev', 'Alberta', 83680, true),(3, 'Habit mix', 'description', 'https://images.pexels.com/photos/2080018/pexels-photo-2080018.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2080018/pexels-photo-2080018.jpeg', 46058, 1, 2, 3, 'Canada', '1650 Hejto Center', 'Genwezuj', 'Ontario', 38051, true);

INSERT INTO property_reviews (guest_id,
property_id,
reservation_id,
rating,
message)
VALUES (1, 1, 1, 1, 'messages'),(2, 2, 2, 2, 'messages'),(3, 3, 3, 3, 'messages');

INSERT INTO reservations (start_date, end_date, property_id, guest_id)
VALUES ('2018-09-11', '2018-09-26', 1, 1),
('2019-01-04', '2019-02-01', 2, 2),
('2021-10-01', '2021-10-14', 3, 3);

# replaced data with more fake data provided

wget http://bit.ly/2YNEENF -O seeds/02_seeds.sql

# insert data

\i seeds/02_seeds.sql;

# SELECT challenge

create folder 1_queries to create sql for each search inside

created 5 sql queries

# node postgres

connect to a PostgreSQL database from a JavaScript app using the node-postgres library.

using promises instead of callbacks

# setup node app

# download zip git hub data for boiler plate

https://github.com/lighthouse-labs/LightBnB_WebApp

move into folder

# install dependencies

npm i
npm install -g npx

Run the app npm run local and view it at localhost:3000.

# info of data structure

https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m05w12/activities/769?journey_step=42

-public contains all of the HTML, CSS, and client side JavaScript. We're not really interested in that right now.
-sass contains all of the sass files. Again, not really interesting right now.
-server contains all of the server side code. This is where we will be writing the database queries.

## server folder

- server.js is the entry point to the application. This connects the routes to the database.

- apiRoutes.js and userRoutes.js are responsible for any HTTP requests to /users/something or /api/something.

-json is a directory that contains a bunch of dummy data in .json files.

-database.js is responsible for all queries to the database. It doesn't currently connect to any database, all it does is return data from .json files.

We will have to modify the database.js file to have it make queries to our PostgreSQL database instead of JSON files.

### datbase.js

All of these functions are currently getting fake data from the JSON files

only refactor getAllProperties

# connect to postgres

1.installed in \_app directory
npm install pg

2.add code in database.js
const { Pool } = require('pg');

const pool = new Pool({
user: 'vagrant',
password: '123',
host: 'localhost',
database: 'lightbnb'
});

3. test connection

3.1 add in databse.js
// the following assumes that you named your connection variable `pool`
pool.query(`SELECT title FROM properties LIMIT 10;`).then(response => {console.log(response)})
3.2 run
psql -h localhost -p 3000 -U vagrant lightbnb

# refactor getAllProperties from databse.js

const getAllProperties = (options, limit = 10) => {
return pool
.query(`SELECT * FROM properties LIMIT $1`, [limit])
.then((result) => {
console.log(result.rows);
return result.rows;
})
.catch((err) => {
console.log(err.message);
});
};

//.then always returns a promise

# breakout

add db in top of database.js
const db = require('index.js');

primses return.then is available for the next .then

databases advanced store procedure
views = a view

processed
transaction

async await

google maps
food ordering app
technology app we pick
postgres, jquery or ejs (jquery- go for it)
games

work on branches
then merge

# To get the latest entry

evernote for notes
FROM properties ORDER BY id DESC LIMIT 1
