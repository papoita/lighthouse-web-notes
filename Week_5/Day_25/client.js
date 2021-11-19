/** @format */

const net = require("net");
const args = process.argv.slice(2);
const message = args.join(" ");

const config = {
	host: "localhost",
	port: 3001,
};
const connection = net.createConnection(config);
client.setEncoding("utf8");
connection.on("connect", () => {
	console.log("connected!");
	connection.write("Hello from Paola");
	connection.write(args[0]);
});

setTimeout(() => {
	connection.end();
}, 1000);
