const http = require('http');
const fs =require('fs');

const path = require('path');
const  hostname = '172.20.4.233';
const port = 3001;

const server = http.createServer((req, res) =>{
let filePath =path.join(__dirname, 'index.html');

if(req.url==='/'){
       filePath = path.join(__dirname, 'index.html');
} else if (req.url === '/about'){
       filePath=path.join(__dirname, 'about.html');
}else if (req.url==='/detculs'){
       filePath=path.join(__dirname, 'detculs.html');
}

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