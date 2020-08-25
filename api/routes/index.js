var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
    
    res.json("HAHA")

});

module.exports = router;
