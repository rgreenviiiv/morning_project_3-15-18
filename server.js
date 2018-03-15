const express = require('express');
const app = express();
const PORT = process.env.PORT || 5150

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));


app.get('/', (req,res)=>{
  res.render('index');
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
app.listen(PORT, ()=>{
  console.log(`listening on ${PORT}`);
})
