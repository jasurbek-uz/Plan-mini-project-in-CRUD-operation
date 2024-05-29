console.log('Web Serverni boshlash');
const express = require("express");
const app = express();
const db = require("./server").db();
const mongodb = require("mongodb");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set("views", "views");
app.set("view engine", "ejs");
// creation new item
app.post("/create-item", (req, res) => {
    const new_reja = req.body.plan;
    db.collection("plan").insertOne({plan: new_reja}, (err, data) => {
        res.json(data.ops[0]);
    });
});

// delete item
app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  // console.log("deletion id: ", id);
  db.collection("plan").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    (err, data) => {
      if (err) {
        console.log("Error deleting item: ", err.message);
        res
          .status(500)
          .json({ state: "error", message: "Failed to delete item" });
      } else {
        res.json({ state: "success" });
      }
    }
  );
});
//when deletetion is proccessing, edition proccessing
app.post("/edit-item", (req, res) => {
  const data = req.body;
  console.log(data);

  db.collection("plan").findOneAndUpdate(
    {
      _id: new mongodb.ObjectId(data.id),
    },
    { $set: { plan: data.new_input } },
    (err, data) => {
      res.json({ state: "success" });
    }
  );
});

// delete all operation
app.post("/delete-all", (req, res) =>{
  if (req.body.delete_all) {
    db.collection("plan").deleteMany(function (){
      res.json({state:"hamma rejalar ochirildi"});
    });
  }
});

// Edittion proccess
app.get("/", function(req, res){
    db.collection("plan")
    .find()
    .toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            res.render("plan", {items: data});
        }    
    });
});

module.exports = app;




