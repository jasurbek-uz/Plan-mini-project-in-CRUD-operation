// import main module & packages:
const express = require("express");
const app = express();

// Call MongoDB
const db = require("./server").db();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3 session (views codes):
app.set("views", "views");
app.set("view engine", "ejs");

// 4 session (route codes):
app.post("/create-item", (req, res) => {
  console.log("user entered /create-item");
  const new_plan = req.body.reja;
  console.log(new_plan)
  db.collection("plan").insertOne({ plan: new_plan }, (err, data) => {
    res.json(data,ops[0]);
  });
});

app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plan")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log("Collection Error: ", err.message);
        res.end("(app.get/) something went wrong");
      } else {
        console.log("Collection Data: ", data);
        res.render("plan", { items: data });
      }
    });
});

module.exports = app;
