var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

const jwt = require('jsonwebtoken');
const secret = 'sk33msk';

router.post('/user', async function (req, res, next) {
    const db = req.app.locals.db

    const user = req.body

    try {
        var [passwordHashed] = await db.execute("SELECT password FROM users WHERE email=?", [user.email])

        if (passwordHashed.length === 0) {
            res.json({
                success: false,
                description: {
                    message: "Wrong Email. It does not exist",
                    errno: 56
                }
            })            
        } else 
            bcrypt.compare(user.password, passwordHashed[0].password, async function (err, result) {
                if (result === true) {

                    var [data] = await db.execute("SELECT * FROM users WHERE email=? LIMIT 1", [user.email])
                    // Issue token
                    const payload = { 
                        email: user.email,
                        name: data[0].name,
                        surname: data[0].surname,
                        afm: data[0].afm,
                        id: data[0].id
                    };
                    const token = jwt.sign(payload, secret, {
                        expiresIn: '1h'
                    });
                    res.cookie('token', token, {httpOnly:true}).json({
                        success:true,
                        data: payload
                    })

                } else {
                    res.json({
                        success:false,
                        description: {
                            message: "Wrong Password.",
                            errno: 53
                        }
                    })
                }
            });
    } catch (err) {
        console.log(err)
        res.json(err)
    }

});

router.get('/user', async function (req, res, next) {
    res.json({
        error: "No GET request for /login/user"
    })
})

router.get('/', async function (req, res, next) {
    res.json({
        error: "No GET request for /login"
    })
})


module.exports = router;
