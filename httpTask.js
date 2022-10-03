const http = require("http");
const fs = require("fs");

// fs.writeFileSync("index.html");
const server = http.createServer((req,res)=>{

    fs.readFile("./index.html", (err,data)=>{
        res.writeHead(200);
        res.end(data);
    })
})
server.listen(5000,()=> console.log("the server is up at 5000"));

