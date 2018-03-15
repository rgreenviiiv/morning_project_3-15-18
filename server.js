const express = require('express');
const app = express();
const PORT = process.env.PORT || 5150

app.get('/', (req,res)=>{
  res.send('Hello');
})

app.get('/about',(req,res)=>{
  res.send('this is the about page')
})
app.get('/contact',(req,res)=>{
  res.send('this is the contact page')
})
app.get('/subscribe',(req,res)=>{
  res.send('Please subscribe to this page')
})
