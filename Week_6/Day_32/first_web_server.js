/** @format */
/**
 * @TODO how to get urls first if else
 * try in CLI curl -i www.google.com
 */

const http = require("http");
const PORT = 8080;

// a function which handles requests and sends response
const requestHandler = function (request, response) {
	if (request.url === "/") {
		response.end("Welcome!");
	} else if (request.url === "/urls") {
		response.end("www.lighthouselabs.com");
	} else {
		response.statusCode = 404;
		response.end("404 Page not found");
	}
};

const server = http.createServer(requestHandler);
console.log("Server created");

server.listen(PORT, () => {
	console.log(`Server listening on: http://localhost:${PORT}`);
});
console.log("Last line(after .listen call)");

//in browser
//http://localhost:8080/path
