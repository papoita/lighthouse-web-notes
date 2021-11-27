<!-- @format -->

Nov 24

# CRUD

create users["5315"] = {first_name: "John", last_name: "Smith"}
read users["5315"]
update users["5315"].first_name = "Jane"
delete delete users["5315"]

client is the browser
communicate through HTTP (url)
server is the server.js and the database

## HTTP methods

get
post
put
delete

safe method =read only: get head options and trace
put and post not safe

## Idempotent methods

multiple identical requests with that method have the same intended effect as a single request
post not idempotent

## HTTP method override

To create PUT and DELETE requests we would need to use a workaround known as HTTP Method Override, but for simplicity we will make do with just GET and POST. Instead of PUT and DELETE, we will use POST

# URL shortening part1

form tag attributes: action(which URL to bubmit) and method (the form which http method to use)
input tag name =variable - longURL (data in the body of POST request)

### created new path for form new url

### installed pody parser (deprecated)

npm install body-parser
to the top of explress add this code before all the gets

`````
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true})); ````

`````

## a post route from form submission

form has : action="/urls" method="POST">

## generate random alpha numeric string

generateRandomString()

```
function generateRandomString() {
	var result = "";
	var characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	var charactersLength = characters.length;
	for (var i = 0; i < 6; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	console.log(result);
	return result;
}
generateRandomString(6);
```
