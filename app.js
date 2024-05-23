const express = require("express");
const app = express();
// const http = require("http");
// const fs = require("fs");
const path = require("path")

// Mongodb connection path and method
const db = require("./app").db();

// let db;
//  const connectionString = "mongodb+srv://braveredmi:PFGsplNheMyPFHhn@cluster0.3mre5hw.mongodb.net/b://localhost:27017?tls=true" 

//  database folderdagi json filega ulab malumotlarni olib beradi
// let user;
// function loadUserData(callback) {
//   fs.readFile("database/user.json", "utf8", (err, data) => {
//     if (err) {
//       console.error("Error reading user data:", err);
//       callback(err, null); // Pass the error to the callback
//     } else {
//       user = JSON.parse(data);
//       callback(null, user); // Pass the user data to the callback
//     }
//   });
// }

app.use(express.static("public")); // public folderdagi datalarni olib beradi
app.use(express.json()); // json filedagi datalarni olib beradi 
app.use(express.urlencoded({ extended: true })); // ejs filedagi html datalarni olib beradi

//  view folderni settings va unga ulash undagi malumotlarni olib beradi 
app.set("views", "views"); // qaysi folder bolsa osha folderi  yozish kerek va datalarni olib beradi
app.set("view engine", "ejs");
// app.set('views', path.join(__dirname, 'views'));

app.get ("./create-item", (req, res) => {
  console.log(req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({reja:new_reja},(err, data) =>{
if (err) {
  console.log(err);
  res.end('something went wrong');
} else {
  res.end('successfully added');
}
  });
});
app.get('./', function (req, res){
  db.collection("palns").find().toArray((err, data) => {
if(err) {
  console.log(err);
  res.end("something went wrong");
} else{
  console.log(err);
  res.render("reja");
}
  });
  res.render("reja");
});

module.export = app;
// app.get("/author", (req, res) => {   // shu author ejs filedagi datalarni ishga tushirib beradi
//   // Load user data before rendering
//   loadUserData((err, userData) => {
//     if (err) {
//       // Handle the error (e.g., render an error page)
//       res.status(500).send('Error loading user data');
//     } else {
//       res.render("author", { user: userData });
//     }
//   });
// });

// const server = http.createServer(app);
// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port} http;//localhost:${port}`);
// });
