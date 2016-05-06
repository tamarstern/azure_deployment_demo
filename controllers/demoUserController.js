﻿// Load required packages
var DemoUser = require('../models/demoUser');

// Create endpoint /api/users for POST
exports.postUsers = function (req, res) {
    var user = new DemoUser({
        username: req.body.username,
        password: req.body.password
    });
    
    user.save(function (err) {
        if (err)
            res.send(err);
        
        res.json({ message: 'New beer drinker added to the locker room!' });
    });
};

// Create endpoint /api/users for GET
exports.getUsers = function (req, res) {
    DemoUser.find(function (err, users) {
        if (err)
            res.send(err);
        
        res.json(users);
    });
};
