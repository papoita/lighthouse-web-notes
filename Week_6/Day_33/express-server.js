const express = require("expres");
const morgan = require("morgan"); //have to install morgan
const app = express();
app.use(morgan(dev));
//middleware it happens first
// app.use((req, res, next)=>{
// console.log("REquest received");
// //res.send("HEllo from middleware"); this will result in an error facing the server 
// next();
// });

//server 

const port = 8080;
app.get("/", (req, res) => {
  res.send("This is / page");
});
app.get("/home", (req, res) => {
  res.send("This is / page");
});
app.get("/", (req, res) => {
  res.send({text : "hello", value : 123});
});
app.get("*", (req, res) => { //wild card if the page doesn't exist
  if(!password)
  return res.status(401).send("not authorized")

if(!something)
  return res.status(304).send("page not found")

  
  return res.status(404).send("page not found")
;})
app.listen(port, ()=>{
  console.log(`App listening on port ${port}`)
})