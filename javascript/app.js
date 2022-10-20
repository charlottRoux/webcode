const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const express = require('express')
const querystring = require('querystring')
const port=8000;
const app=express();


var options = {
  root: path.join(__dirname,'..')
};
console.log(path.join(options.root,'public'));

//const mapping= import(path.join(options.root,'modules/mapping.mjs'));
const users =[]

app.use(express.static(path.join(options.root,'public')));
// app.use(express.static(path.join(options.root,'javascript')));
// app.use(express.static(path.join(options.root,'images')));
app.get('/users',(req, res)=>{
  res.json(users);
})

app.get('/',(req,res)=>{
  res.sendFile('index.html',options);
})
app.get('/webmap',(req,res)=>{
  res.sendFile('ResumePage.html',options);
})
module.exports=app;
app.listen(process.env.port||port);

// const server = http.createServer((req, res) => {
// const page = url.parse(req.url).pathname;
// console.log(page)
//   if (page == '/'){
//     fs.readFile('ResumePage.html', function(err,data){
//       res.statusCode = 200;
//       res.writeHead(200, {'Contest-Type' : 'text/html'});
//       res.write(data);
//       res.end();
//     });
//   }
//   else if (page == '/css/ResumePage.css'){
//     fs.readFile('css/ResumePage.css', function(err,data){
//       res.write(data);
//       res.end();
//     });
//   }
//
//
// });
//
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
