require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

// middleware
app.use(express.static(__dirname + '/public/css'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('view engine','ejs');

// main
app.get('/',(req,res)=>{
    res.render('index');
})

mongoose.connect(`mongodb+srv://lancify:${process.env.mongopassword}@cluster0.hripjgl.mongodb.net/?retryWrites=true&w=majority`,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    app.listen(5500,()=>{
        console.log('server started in port 5500');
    })
})