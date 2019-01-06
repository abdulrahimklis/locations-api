// use exppress
const express = require('express');
const app = express();

// localhost: 3000
app.listen(3000);

// connect all other modules
const bodyParser = require('body-parser');

// conect to mongodb
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/locations", { useNewUrlParser: true });

// use body parser
app.use(bodyParser.json());

//initialize routes
app.use('/api', require('./routes/api'));

// error handling middelweare
app.use(function (err, req, res, next) {
    // console.log(err);
    res.status(422).send({error: err.message});
});