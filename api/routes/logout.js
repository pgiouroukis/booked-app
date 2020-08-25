var express = require('express');
var router = express.Router();

router.get('/user', async function (req, res, next) {
    const db = req.app.locals.db

    var token = "notValid"

    res.cookie('token', token, { httpOnly: true }).json({
        success: true
    })

});

module.exports = router;
