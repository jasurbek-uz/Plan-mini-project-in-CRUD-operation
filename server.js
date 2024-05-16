console.log("web serverni boshlash");
const express = require("express");
const http = require("http");

const app = express();
//1.kirish kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2.session code

//3.views code
app.set("views", "public");
app.set("view engine", "ejs");


app.get ("/hello",function (req, res){
res.end (`<h1 style="background:red">"Hello world"</h1>`);
});

app.get ("/gift",function (req, res){
   res.end (`<h1>"siz sovgalar sahifasidasiz "</h1>`);
    });
   
   
   app.post("/create-item",(req,res)=>{
    console.log(req.body);
    res.json({test:"success"});
 });



// 4.routing code
app.get("/", function (req, res) {
  res.render("harid");
});


//server xosil qilamiz
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT,  () => {
  console.log(`The server is running successfully on port:${PORT}`);
});

// const port = 3000;
// app.listenerCount(port, ()=> {
//   console.log('Server is successfully running on port ${port}')
// }
// )