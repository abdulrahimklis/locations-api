const express = require('express');
const router = express.Router();
const Location = require('../models/locations');

// get a list of ninjas from db
router.get("/locations", (req, res, next) => {
    var obj = [
        { id: 1, lat: 18.34244, lon: 43.84864, alias: 'marker1', category: 'standard' },
        { id: 2, lat: 18.32244, lon: 43.84164, alias: 'marker2', category: 'standard' },
        { id: 3, lat: 18.34244, lon: 43.86864, alias: 'marker3', category: 'optional' },
        { id: 4, lat: 18.34244, lon: 43.81864, alias: 'marker4', category: 'optional' }
    ];
    res.send(obj);

    // or if you wish to use your POST, PUT, DELETE requests:
    // Location.find({}).then((location) => {
    //     res.send(location)
    // });
});

// add new location to the db
router.post("/locations", (req, res, next) => {
    Location.create(req.body).then((location) => {
        res.send(location);
    }).catch(next)
});

// update a location in the db
router.put("/locations/:id", (req, res, next) => {
    Location.findByIdAndUpdate({_id:req.params.id},req.body).then(function (location) {
        Location.findOne({_id:req.params.id}).then(function (location) {
            res.send(location);
        });
    });
});

//delete location from the db
router.delete("/locations/:id", (req, res, next) => {
    Location.findByIdAndRemove({_id: req.params.id}).then(function (location) {
        res.send(location)
    });
});

module.exports = router;