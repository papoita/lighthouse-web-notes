<!-- @format -->

Nov 22

How HTTP Servers work
How to build HTTP Servers using Node
Using Express, an HTTP server framework
How domain names works

# cURL

cURL is a command line utility that is used to make HTTP requests to a given URL and it outputs the response. It allows you to see the URL.
curl http://www.google.com

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
