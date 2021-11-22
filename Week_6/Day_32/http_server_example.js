/** @format */
//node as a web server using http
let http = require("http");
let server = http.createServer(function (request, response) {
	response.writeHead(200, { "Content-Type": "text/plain" });
	response.end("helloWorld\n");
});
server.listen(3000);

//open browser because it reads the server/
// copypaste locahost:3000;
