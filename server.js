const express=require('express')

const path=require('path');
const port =process.env.PORT||4000;
const app=express();

app.use(express.static(path.join(__dirname,'build')))//This will look into the static file from the build folder

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'build/index.html'))
})

app.listen(port,(err)=>{
  if(err) throw err;
  console.log('server running on port ');
})
