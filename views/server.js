const http = require("http");
const app = ("./app");
const mongodb = require ("mongodb");

// mongodb ga ulanish 
let db;
 const connectionString = "mongodb+srv://braveredmi:PFGsplNheMyPFHhn@cluster0.3mre5hw.mongodb.net/b://localhost:27017?tls=true" 

 mongodb.connect(connectionString,  {useNewUrlParsel: true, useUnifieldTopology: true,
 }, (err, client) => {
if (err) console.log("ERROR on connection MongoDb");
else{
    console.log("MongoDb connection succeed")
    module.export = client;
    const app = require("./app");
    const server = http.createServer(app);
            const port = 3000;
            app.listen(port, () => {
            console.log(`Server is running on port ${port} http;//localhost:${port}`);
        });
    
}
 });
        
            