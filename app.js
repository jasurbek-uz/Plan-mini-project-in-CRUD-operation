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

app.post("/create-item", (req, res) => {
    const new_reja = req.body.reja;
    db.collection("plan").insertOne({reja: new_reja}, (err, data) => {
        res.json(data.ops[0]);
    });
});

// delete item
app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  console.log("deletion id: ", id);

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




// import main module & packages:
// const express = require("express");
// const app = express();

// // Call MongoDB
// const db = require("./server").db();
// const mongodb = require("mongodb");

// app.use(express.static("public"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // 3 session (views codes):
// app.set("views", "views");
// app.set("view engine", "ejs");

// // 4 session (route codes):
// app.post("/create-item", (req, res) => {
//   console.log("user entered /create-item");
//   const new_plan = req.body.reja;
//   console.log(new_plan)
//   db.collection("plan").insertOne({ plan: new_plan }, (err, data) => {
//     res.json(data.ops[0]);
//   });
// });
// // delete command 
// app.post("/delete-item", (req, res) => {
//  const id =req.body.id;
//  db.collection("plans").deleteOne ({_id: new mongodb.ObjectId(id)}, 
//  function(err, data) {
//   res.json({state:"sccess"});
//   }
//  )
// //  console.log(id);
// //  res.send("done");
// });

// app.get("/", function (req, res) {
//   console.log("user entered /");
//   db.collection("plan")
//     .find()
//     .toArray((err, data) => {
//       if (err) {
//         console.log("Collection Error: ", err.message);
//         res.end("(app.get/) something went wrong");
//       } else {
//         console.log("Collection Data: ", data);
//         res.render("plan", { items: data });
//       }
//     });
// });

// module.exports = app;
