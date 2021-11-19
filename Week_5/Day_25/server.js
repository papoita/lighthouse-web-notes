/** @format */

const net = require("net");

//client places the call
//server answers the call
//one way phone call
const server = net.createServer();
server.on("connection", (client) => {
	client.setEncoding("utf8");
	console.log("someone connected", client); //event //handlers //client.remoteAddress IP address

	client.on("data", (data) => {
		console.log(client.remoteAddress, "sent:", data);
	});
	client.on("end", () => {
		console.log("Somepone left");
	});
	client.on("error", (err) => {
		console.log("err.message", client.remoteAddress);
	});
});

server.listen(3001);
console.log("Server listening on port 3001");

//socket programming, industrial applications communiating with industrial machines
//vs websockets
//in another terminal use: telnet localhost 3001
//127.x.x.x loopback ip address
//127.0.0.1 //myself or this computer
