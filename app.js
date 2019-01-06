// use exppress
const express = require('express');
// install cors
var cors = require('cors');
// connect all other modules
const bodyParser = require('body-parser');
// conect to mongodb
const mongoose = require('mongoose');
// const app express
const app = express();
// use cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//initialize routes
app.use('/api', require('./routes/api'));

// localhost: 3000
app.set('port', 3000);

mongoose.connect("mongodb://localhost:27017/locations", { useNewUrlParser: true });

// use body parser
app.use(bodyParser.json());

// error handling middelweare
app.use(function (err, req, res, next) {
    console.log(err);
});