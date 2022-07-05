const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const nodemailer = require("nodemailer");
const wishData = require('./wishModel')
const path = require('path');
const { findOne } = require('./wishModel');
const PORT = process.env.PORT || 3000


const app = new express();
app.use(cors())
app.use(express.json({urlencoded:true}));

app.use(express.static('dist/frontend'));

var gifs = ["https://c.tenor.com/faq8AqAPxBIAAAAC/onam-maveli.gif","https://c.tenor.com/GFX5MRhYZU0AAAAC/smile-karikku.gif","https://c.tenor.com/2QUDNrRI4WcAAAAC/dance-karikku.gif","https://c.tenor.com/FX7Ck8cjkmgAAAAd/anu799maveli.gif"];

randomGif = (gifs)=>{
  return gifs[Math.floor(Math.random()*gifs.length)];
}

app.post('/api/',(req,res)=>{
 res.header("Access-Control-Allow-Origin","*");
 res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE")
 var wish ={
  urname: req.body.urname,
  frname:req.body.frname,
  email : req.body.email,
  gif : randomGif(gifs),

 }
 var wishdb = new wishData(wish)
 wishdb.save().then((data)=>{console.log(data._id)
 res.send(data)
 }
  )

})
app.get('/api/wish/:id',(req,res)=>{
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE")
  wishData.findById(req.params.id).then((data)=>{
    console.log(data)
    res.send(data)
  })
})
app.post('/api/email/',(req,res)=>{
  console.log(req.body.email)
  var data = {
    Name:req.body.urname,
    fName:req.body.frname,
    email:req.body.email,
    id:req.body._id
}
console.log(data.email)
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'diwaliwishestoyou@gmail.com',
        pass: 'ppplcytemtgtagtq'
    }
});

var mailOptions = {
    from: 'diwaliwishestoyou@gmail.com',
    to: data.email,
    subject: 'Happy Onam',
    text: 'Hi '+data.fName+' your friend '+ data.Name +' send you onam wishes, check it   👉🏻👉🏻  ' + 'https://onamgreetings.herokuapp.com/wish/' +data.id+''

};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    } else {
        console.log('email send:'+info.response);
    }
});
  res.send()
})

app.get('/*', (req, res)=> {
  res.sendFile(path.join(__dirname + '/dist//frontend/index.html'))})

app.listen(PORT)