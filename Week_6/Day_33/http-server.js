//how to use the http in module
const http = require("http");
const server = http.createServer((request, response) =>{
  const method = request.method;
  const path = request.url;
console.log("someone sent a request",  method, path);
if (method === "GET"&& path === "/home"){
  response.write("this is home page");
  response.end();
return;
}
if (method === "GET"&& path === "/info"){
  response.write("this is info page");
  response.end();
return;
}
response.write("page not found");
response.end();
});
server.listen(8080, ()=> {
  console.log("Server listening on port 8080");
});