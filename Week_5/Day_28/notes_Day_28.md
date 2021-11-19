<!-- @format -->

Nov 18

for loops are very intense for CPU take advantage of Object
reduce BigO
for trasnpose function avoid equality as it might force cohersion types
includes method
map method

# HTTP Introduction

HTTP is a protocol used to read and write "resources" (data) in a simple text-based manner.
GET: used to "get" some data from the server
POST: usually used to create some new data
PUT: generally used for editing existing data on the server
DELETE: used to delete some existing data

## Understanding URLs

[URL parts](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL)

Scheme : protocol
Authority: port
PAth to Resource: on the web server
Parameters:key value pairs separated by &&
Anchor: bookmark inside the rsource

## Status code

While these info pages work well for humans, when a server wants to relay this information to a client it will use a status code.
200: "Everything went great!"
201: "The request has succeeded and a new resource has been created as a result."
404: "Resource was not found."
500: "The server had an error.

## REsponse Body

data client requested inside JSON, HTML

## Headers

to inject extra info

## Summary

HTTP is a request-response protocol, where the client makes requests and the server sends responses
HTTP is a text based protocol, making it easy to read and understand for humans
HTTP requests must contain the verb/method (eg: GET) and the Path (eg: /about)
HTTP requests aren't always to receive data, but sometimes to save data, like when we submit a form on a website. This is done via a POST instead of a GET
Requests and responses both contain key-value based headers (eg: Accept-Language: fr, Content-Type: text/html, etc.)

# TCP

HTTP is not alternative to TCP, but rather the text-based "language" that is used to communicate over a TCP connection. This means that every time our browser accesses a website, it makes an HTTP request by opening a TCP connection on port 80 (or 443 for https) to a given HTTP server's IP address. It then sends text-based commands such as GET /path-to-page HTTP/1.1\r\n along with many other request headers (such as the user agent string, etc.) and waits for a response from the server. The response could be any type of document, which typically is either HTML, CSS, or JS.

# REquest npm package

The request module makes HTTP requests easy. Behind the scenes, it uses http which in turn uses net, in the way that we did recently.
