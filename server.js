const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://braveredmi:PFGsplNheMyPFHhn@cluster0.3mre5hw.mongodb.net/plan";

mongodb.connect(connectionString, 
    {
    useNewUrlParser: true, 
    useUnifiedTopology: true
    }, 
    (err, client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else {
        console.log("MongoDB connection succedd");
        module.exports = client;
        
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3050;
        server.listen(PORT, function() {
            console.log(`The server is running successfully on port: ${PORT} , http://localhost: ${PORT}`);
    });
         }
    }
);




















