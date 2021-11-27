<!-- @format -->

Nov 22

How HTTP Servers work
How to build HTTP Servers using Node
Using Express, an HTTP server framework
How domain names works

# cURL

cURL is a command line utility that is used to make HTTP requests to a given URL and it outputs the response. It allows you to see the URL.
curl http://www.google.com
curl -i http://localhost:8080/path //gives the response line in the code

# Character encoding

utf-8 to use single character encoding to handle any character
UTF-8 is capable of encoding all 1,112,064[nb 1] valid character code points in Unicode using one to four one-byte (8-bit) code units.
before was ASCII represent every character using a number between 32-127

utf every code point 0-127 is stored in a single byte
variable length character encoding

# Domain name system

DNS
URL alias for IP address that requests can be routed to
resolve name server, the root name server, the tld name server, authoritative name server
Root -> TLD -> Authoritative -> Resolving

Correct, DNS resolution starts with root servers, Top Level Domain name server, authoritative server, and finally resolving server

## record types

A: most common; map a hostnames to IP address (IPv4, 32-bit address)
NS: Name Server that is responsible for a DNS zone
MX: Mail Exchange record specifies where email gets sent to
CNAME: Canonical Name, an alias for another hostname
AAAA: similar to A, but uses IPv6, 128-bit address

## DNS providers

Amazon Route 53
CloudFlare
Verisign
EasyDNS
Azure DNS

in CLI= `dig +trace google.com`

# Express

minimal and flexible Node.js web application frameworsk provides a robust ser of features
robust routing
http helpers (redrecting, caching)
supporting 14 template engines

“Express is a back-end web application framework for Node.js that provides the means for a developer to create and maintain robust servers” (Course Report, 2018)
Express helps to organize web applications on the server-side into a more organized architecture.

# Tiny URL prject

Learning Outcomes
In completing this project, learners will be able to:

Implement crud-like multi page web applications using Node and Express.
Explain the middleware pattern utilized by web servers like Express.
Explain the statelessness of HTTP and the major ways that it can be overcome (URLs and cookies).
Use command line HTTP clients such as cURL.
Implement HTTP redirects.
Issue HTTP status codes.
Use cookies to persist state between requests.
Implement user authentication using best practices, including (encrypted) cookies and (hashed) passwords.
Create RESTful web server endpoints and make requests to the endpoints.
*Stretch: Explain the concept of method overriding.
*Stretch: Use method overriding to extend usage of HTTP requests to include verbs (such as PUT and DELETE) not supported by the client.
\*Stretch: Implement analytics features using knowledge of cookies

Routing refers to how an application’s endpoints (URIs) respond to client requests. Each endpoint (or route) can have one or more handler functions, which are executed when the route is matched. See http://expressjs.com/en/guide/routing.html.

# Template Engine

Templates are files that define the presentation of a web app's data separately from the server logic

Keeping server logic (in this case JavaScript) separate from markup (HTML), making it easier to modify or debug one without affecting the other
Separating different parts of an HTML document into different files, helping keep the length of HTML files short and manageable

The template engine replaces variables in a template file with actual data, and transforms the template into an HTML file sent to the client (that is, the browser)

## EJS

view engines
### Server side rendering

res.render(template + variables) -> html -> broswe