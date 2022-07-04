const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const wishData = require('./wishModel')
const path = require('path');
const { findOne } = require('./wishModel');
const PORT = process.env.PORT || 5000

const app = new express();
app.use(cors())
app.use(express.json({urlencoded:true}));

app.post('/',(req,res)=>{
 res.header("Access-Control-Allow-Origin","*");
 res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE")
 var wish ={
  urname: req.body.urname,
  frname:req.body.frname,
  email : req.body.email,
  gif : "https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif",

 }
 var wishdb = new wishData(wish)
 wishdb.save().then((data)=>{console.log(data._id)
 res.send(data)
 }
  )

})
app.get('/wish/:id',(req,res)=>{
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE")
  wishData.findById(req.params.id).then((data)=>{
    console.log(data)
    res.send(data)
  })
})

app.listen(PORT)