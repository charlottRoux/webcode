const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const express = require('express')
const querystring = require('querystring')
const port=8000;
const app=express();
const bcrypt = require('bcrypt');



app.use(express.json())
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

app.post('/users',async (req,res)=>{
  try{
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user= {
        name: req.body.name,
        password: hashedPassword
      }
      console.log(user)
      users.push(user);
      res.status(201).send(user);
  }
  catch{
    res.status(500).send();

  }

  //User create and hash password
})

app.post('/users/login', async(req,res) =>{
  const user = users.find(user =>user.name === req.body.name)
  if (user == null){
    res.status(400).send('Cannot find user');
  }
  try{
      if(await(bcrypt.compare(req.body.password, user.password))){
      res.send('Success');
    }
    else{
      res.send('login failed');
    }
  }
  catch{
    res.status(500).send();
  }



})

app.get('/',(req,res)=>{
  res.sendFile('index.html',options);
})

app.get('/webmap',(req,res)=>{
  res.sendFile('placeholder.html',options);
})

module.exports=app;
app.listen(process.env.PORT||port);

//   console.log(`Server running at http://${hostname}:${port}/`);
// });
