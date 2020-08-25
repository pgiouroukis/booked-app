var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const db = require("../utils/mongoConnection");

router.get('/user', function (req, res, next) {
    const db = req.app.locals.db
    db.collection("test").find({}).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        res.json(result)
    });
});

module.exports = router;
