console.log("web serverni boshlash");
const express = require("express");
const http = require("http");
const app = express();
const fs = require("fs");

//1.kirish kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//3.views code
app.set("views", "public");
app.set("view engine", "ejs");
//server xosil qilamiz
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT,  () => {
  console.log(`The server is running successfully on port:${PORT}`);
});
