const http = require('http');
const fs =require('fs');

const path = require('path');
const  hostname = '172.20.4.233';
const port = 3001;

const server = http.createServer((req, res) =>{
const filePath =path.join(__dirname, 'index.html');

    fs.readFile(filePath, (err, data) =>{
       if(err){
              res.writeHead(500)
              res.end("Error loading the file: "+err.code)

       }
       else{
              res.writeHead(200, { 'Content-Type': 'text/html'});
              res.end(data, 'utf-8');
       }

    });
});
const server1 = http.createServer((req, res) =>{
       const filePath =path.join(__dirname, 'abeut.html');
       
           fs.readFile(filePath, (err, data) =>{
              if(err){
                     res.writeHead(500)
                     res.end("Error loading the file: "+err.code)
       
              }
              else{
                     res.writeHead(200, { 'Content-Type': 'text/html'});
                     res.end(data, 'utf-8');
              }
       
           });
       });
       
server.listen(port, hostname, () =>{
       console.log(`Server runing at http://${hostname}:${port}/`);

});