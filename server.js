const http = require("http");
const mongodb = require ("mongodb");

// mongodb ga ulanish 
let db;
 const connectionString = "mongodb+srv://braveredmi:PFGsplNheMyPFHhn@cluster0.3mre5hw.mongodb.net/plan"


 mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("Error on connection MongoDB: ", err.message);
    else {
      console.log("MongoDB connected successfully!");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);

      const PORT = 3000;
      server.listen(PORT, (err, res) => {
        console.log(`Server is running on port: ${PORT}`);
      });
    }
  }
);
