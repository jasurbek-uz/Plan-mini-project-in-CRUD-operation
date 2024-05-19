const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");
const path = require("path")

let user;
 
function loadUserData(callback) {
  fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading user data:", err);
      callback(err, null); // Pass the error to the callback
    } else {
      user = JSON.parse(data);
      callback(null, user); // Pass the user data to the callback
    }
  });
}

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", "views");
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

app.get("/author", (req, res) => {
  // Load user data before rendering
  loadUserData((err, userData) => {
    if (err) {
      // Handle the error (e.g., render an error page)
      res.status(500).send('Error loading user data');
    } else {
      res.render("author", { user: userData });
    }
  });
});

const port = 3006;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
