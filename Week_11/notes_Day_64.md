<!-- @format -->

January 10 and 11, 2022

# SQL introduction

https://sqlbolt.com/

Order of execution in SQL

aggregation function
https://sql-joins.leopard.in.ua/

dif between inner join(data overlapping),
left join (all data from left) project lives in table A and space shared
right join (all data table B ) and that data that overlaps
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

# SQLZOO - Part 1

https://sqlzoo.net/wiki/SQL_Tutorial
1,2,3,5

SELECT population FROM world
WHERE name = 'Germany'

SELECT name, population FROM world
WHERE name IN ('Brazil', 'Russia', 'India', 'China');

SELECT name, area FROM world
WHERE area BETWEEN 200000 AND 250000

SELECT name, continent, population FROM world

# SQL keywords

## 0 BASICS

SELECT name FROM world
WHERE population = 64105700

SELECT name. gdp/10000000000
FROM world
WHERE population > 200000000000

//percapita gdp = gdp/population
SELECT name gdp/population
FROM world
WHERE population > 200000000000

SELECT name, population/1000000 FROM world WHERE continent ='South America';

SELECT name, population FROM world WHERE name IN ('France', 'Germany', 'Italy')

https://www.w3schools.com/sql/sql_ref_keywords.asp

SELECT name,
ROUND(population/1000000,1)
FROM bbc

SELECT name, LENGTH(name), continent, LENGTH(continent), capital, LENGTH(capital)
FROM world
WHERE name LIKE 'G%'

## Quiz basics

1//
SELECT name, population
FROM world
WHERE population BETWEEN 1000000 AND 1250000

2//
SELECT name, population
FROM world
WHERE name LIKE "Al%"

3// countries that end in A or L

SELECT name FROM world
WHERE name LIKE '%a' OR name LIKE '%l'

4//SELECT name,length(name)
FROM world
WHERE length(name)=5 and region='Europe'

5//
SELECT name, area\*2 FROM world WHERE population = 64000

6//countries with an area larger than 50000 and a population smaller than 10000000
ELECT name, area, population
FROM world
WHERE area > 50000 AND population < 10000000

7// population density of China, Australia, Nigeria and France

SELECT name, population/area
FROM world
WHERE name IN ('China', 'Nigeria', 'France', 'Australia')

## 1 SELECT from world

SELECT name, LEFT(name,1), capital
FROM world
<> as the NOT EQUALS operator.

SELECT name
FROM world
WHERE name LIKE 'B%'
AND name NOT LIKE '%a%'

SELECT name, population
FROM world
WHERE continent IN ('Europe', 'Asia')

SELECT population
FROM world
WHERE name = 'United Kingdom'

## quiz from part 1

1// name of countries beginning with U
SELECT name
FROM world
WHERE name LIKE 'U%'

2// shows just the population of United Kingdom?

SELECT population
FROM world
WHERE name = 'United Kingdom'

3//SELECT continent
FROM world
WHERE name = 'France'

4//
SELECT name, population / 10
FROM world
WHERE population < 10000

5//reveal the name and population of countries in Europe and Asia

SELECT name, population
FROM world
WHERE continent IN ('Europe', 'Asia')

6//would give two rows

SELECT name FROM world
WHERE name IN ('Cuba', 'Togo')

7//
SELECT name FROM world
WHERE continent = 'South America'
AND population > 40000000

## 2 SELECT from nobel

SELECT yr, subject, winner
FROM nobel
WHERE yr = 1960

SELECT winner
FROM nobel
WHERE yr = 1960
AND subject = 'Physics'

SELECT \* FROM nobel
WHERE yr = 1970
AND subject IN ('Cookery',
'Chemistry',
'Literature')

SELECT winner, subject, subject IN ('Physics','Chemistry')
FROM nobel
WHERE yr=1984
ORDER BY subject,winner

//The expression subject IN ('Chemistry','Physics') can be used as a value - it will be 0 or 1.

//Show the 1984 winners and subject ordered by subject and winner name; but list Chemistry and Physics last.

SELECT winner, subject,
FROM nobel
WHERE yr=1984
ORDER BY
CASE WHEN subject IN ('Physics','Chemistry') THEN 1 ELSE 0 END, subject, winner

## Quiz Nobel section 2

1//name of winner's names beginning with C and ending in n
SELECT winner FROM nobel
WHERE winner LIKE 'C%' AND winner LIKE '%n'

2// how many Chemistry awards were given between 1950 and 1960
SELECT COUNT(subject) FROM nobel
WHERE subject = 'Chemistry'
AND yr BETWEEN 1950 and 1960

3// amount of years where no Medicine awards were given
SELECT COUNT(DISTINCT yr) FROM nobel
WHERE yr NOT IN (SELECT DISTINCT yr FROM nobel WHERE subject = 'Medicine')

4//SELECT subject, winner FROM nobel WHERE winner LIKE 'Sir%' AND yr LIKE '196%'

5//show the year when neither a Physics or Chemistry award was given
SELECT yr FROM nobel
WHERE yr NOT IN(SELECT yr
FROM nobel
WHERE subject IN ('Chemistry','Physics'))

6//years when a Medicine award was given but no Peace or Literature award was
SELECT DISTINCT yr
FROM nobel
WHERE subject='Medicine'
AND yr NOT IN(SELECT yr FROM nobel
WHERE subject='Literature')
AND yr NOT IN (SELECT yr FROM nobel
WHERE subject='Peace')

7// SELECT subject, COUNT(subject)
FROM nobel
WHERE yr ='1960'
GROUP BY subject

## 2 SELECT in SELECT

//The result of a SELECT statement may be used as a value in another statement. For example the statement SELECT continent FROM world WHERE name = 'Brazil' evaluates to 'South America' so we can use this value to obtain a list of all countries in the same continent as 'Brazil'

SELECT name FROM world WHERE continent =
(SELECT continent
FROM world WHERE name = 'Brazil')

or

SELECT name, continent FROM world
WHERE continent IN
(SELECT continent FROM world WHERE name='Brazil'
OR name='Mexico')

//
List each country and its continent in the same continent as 'Brazil' or 'Mexico'.

SELECT name, continent FROM world
WHERE continent IN
(SELECT continent
FROM world WHERE name='Brazil'
OR name='Mexico')

// If you are certain that only one value will be returned you can use that query on the SELECT line.
SELECT
population/(SELECT population FROM world
WHERE name='United Kingdom')
FROM world
WHERE name = 'China'

### operators

These operators are binary - they normally take two parameters:

= equals

>     greater than
>
> < less than
> = greater or equal
> <= less or equal
> You can use the words ALL or ANY where the right side of the operator might have multiple values.

//Show each country that has a population greater than the population of ALL countries in Europe.

Note that we mean greater than every single country in Europe; not the combined population of Europe.
SELECT name FROM world
WHERE population > ALL
(SELECT population FROM world
WHERE continent='Europe')

//List each country name where the population is larger than that of 'Russia'.

SELECT name FROM world
WHERE population >
(SELECT population FROM world
WHERE name='Russia')

## Quiz part 3

1//code that shows the name, region and population of the smallest country in each region

SELECT region, name, population FROM bbc x WHERE population <= ALL (SELECT population FROM bbc y WHERE y.region=x.region AND population>0)

2//shows the countries belonging to regions with all populations over 50000

SELECT name,region,population FROM bbc x WHERE 50000 < ALL (SELECT population FROM bbc y WHERE x.region=y.region AND y.population>0)

3// shows the countries with a less than a third of the population of the countries around it

SELECT name, region FROM bbc x
WHERE population < ALL (SELECT population/3 FROM bbc y WHERE y.region = x.region AND y.name != x.name)

4//
SELECT name FROM bbc
WHERE population >
(SELECT population
FROM bbc
WHERE name='United Kingdom')
AND region IN
(SELECT region
FROM bbc
WHERE name = 'United Kingdom')

5//countries with a greater GDP than any country in Africa (some countries may have NULL gdp values).

SELECT name FROM bbc
WHERE gdp > (SELECT MAX(gdp) FROM bbc WHERE region = 'Africa')

6//the countries with population smaller than Russia but bigger than Denmark

SELECT name FROM bbc
WHERE population < (SELECT population FROM bbc WHERE name='Russia')
AND population > (SELECT population FROM bbc WHERE name='Denmark')

7//
SELECT name FROM bbc
WHERE population > ALL
(SELECT MAX(population)
FROM bbc
WHERE region = 'Europe')
AND region = 'South Asia'

# Sum and count part 5

By including a GROUP BY clause functions such as SUM and COUNT are applied to groups of items sharing values. When you specify GROUP BY continent the result is that you get only one row for each different value of continent. All the other columns must be "aggregated" by one of SUM, COUNT ...

The HAVING clause allows use to filter the groups which are displayed. The WHERE clause filters rows before the aggregation, the HAVING clause filters after the aggregation.

If a ORDER BY clause is included we can refer to columns by their position.

//Total world population
SELECT SUM(population)
FROM world

//each continent show the total population
SELECT continent, SUM(population)
FROM world
GROUP BY continent

//WHERE and GROUP BY. The WHERE filter takes place before the aggregating function. For each relevant continent show the number of countries that has a population of at least 200000000.

SELECT continent, COUNT(name)
FROM world
WHERE population>200000000
GROUP BY continent

//GROUP BY and HAVING. The HAVING clause is tested after the GROUP BY. You can test the aggregated values with a HAVING clause. Show the total population of those continents with a total population of at least half a billion

SELECT continent, SUM(population)
FROM world
GROUP BY continent
HAVING SUM(population)>500000000

//

## Quiz part 5

1//shows the sum of population of all countries in 'Europe'

# SELECT order

SELECT ... FROM ... GROUP BY ... HAVING ... LIMIT ...
