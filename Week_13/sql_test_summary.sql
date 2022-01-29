-- QUESTION 00 --
-- =========== --
--
-- Fetch all stores, ordered by the year they opened (oldest first)
-- Include all the columns from the table
SELECT id, name, year_opened, year_closed
FROM stores
ORDER BY year_opened;

-- QUESTION 01 --
-- =========== --
--
-- Fetch all books ordered by isbn first (ascending) and then store_id (descending)
-- Include all the columns from the table

SELECT id, store_id, title, isbn, stock, price_cents
FROM books
ORDER BY isbn, store_id DESC
LIMIT 10;

-- QUESTION 02 --
-- =========== --
--
-- Fetch all stores that opened after 1997
-- Order results in reverse chronological order based on the year that they opened (newest first)
-- Include all the columns from the table

SELECT id, name, year_opened, year_closed
FROM stores
WHERE year_opened > 1997
ORDER BY year_opened DESC;

-- QUESTION 03 --
-- =========== --
--
-- Fetch the number of books which cost more than $7
SELECT count(id)
FROM books
WHERE price_cents > 700;

-- QUESTION 04 --
-- =========== --
--
-- Fetch only the books that are in stock in the Vancouver store (id: 1)
-- Include only their id, title and ISBN


SELECT books.id, title, isbn
FROM books
JOIN stores ON stores.id = store_id
WHERE stores.name = 'Vancouver' and stock > 0;

-- QUESTION 05 --
-- =========== --
--
---- Fetch the id and isbn for all books that are assigned to a store, along with the name of the store they are assigned to
-- Books that are out of stock should still be included
-- Note: for each book we need the store name, not just the store_id

SELECT books.id, books.isbn, stores.name
FROM books
LEFT JOIN stores ON stores.id = books.store_id
WHERE books.store_id IS NOT null;

-- QUESTION 06 (STRETCH) --
-- ===================== --
--
-- Similar to the previous question, except we want ALL books now:
-- Fetch the id and isbn for ALL books, along with the name of the store they are assigned to
-- Books that are out of stock should still be included, just like before
-- Note: We no longer not want to limit the results to only books that are assigned a store
--       if a book is not in store, it should be be in the results but have a null store name
-- Note: for each book we need the store name, not just the store_id
SELECT books.id, books.isbn, stores.name
FROM books
LEFT JOIN stores ON stores.id = books.store_id;

-- QUESTION 07 (STRETCH) --
-- ===================== --
--
-- List all store names, along with how many books each is assigned, regardless of their in-stock situation
-- The resultset should include two columns: store_name and book_count
-- Tip: you will need to rename the columns in the resultset accordingly

SELECT stores.name as store_name, count(books.id) as book_count
FROM books
JOIN stores ON stores.id = books.store_id
GROUP BY store_name;

-- QUESTION 08 (STRETCH) --
-- ===================== --
--
----Similar to the previous question, except we'd like to exclude stores that have less than 3 books:
-- For stores with 3 or more book records, list their names, along with how many books they are assigned.
-- Note: We do NOT want to take into account their stock. Having 0 in stock doesn't matter.
-- The resultset should include two columns: store_name, and book_count
-- Tip: you will need to rename the columns in the resultset accordingly

SELECT * FROM (SELECT stores.name as store_name, count(books.id) as book_count
FROM books
JOIN stores ON stores.id = books.store_id
GROUP BY store_name)
WHERE book_count >= 3;