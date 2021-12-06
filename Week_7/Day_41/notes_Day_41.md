<!-- @format -->

Dec 4/5

# Authorization and authentication

# different http server security

# hashing

comparisson of 2 hashed values without being able to see the pwd

1. input data
2. hash function algorithm used to generate the fingerprint
3. hash value output of the hash function
   unidirectional
   works on prime numbers
   unique values
   same input should return the same hashed output
   small changes to input should result in large changes to the hashed values
   each resultant hash value for dif input should b eunique

   ie. MD-5, SHA-256, SHA-512

# security issues

1.pswd inplain text 2. cookie values

Encryption = plain text + key + algorithm + cipher text
decryption = cipher text + key + algorithm

3.  http is plain text protocol (it is easy to intercept man in the middle)

Man in the middle attack: perpetrator makes a new connection

# Restful API conventions

REST conventiona dn practices in web development that deals witha ccessing and manipulating resources over HTTP.

URL uniform Resource Locator, each resurce can be accessed using and API RESTful endpoint.

HTTP (get, get, put, post, delete) includes methods that map almost 1:1 with CRUD and REST takes advantage of that.
CRUD (create, read, update, delete) and BREAD (browse, read, edit, add, delete)

REsource identifier: name of obj type plural, lower case and words separated by hyphens.
ie.
collection -> /users
first user -> /users/1

accepting alternatives
accept in the header allows for route types /users.html or users.json

if the request has an accept html then an html representation should be sent
