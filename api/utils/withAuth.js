// middleware.js
const jwt = require('jsonwebtoken');
const secret = 'sk33msk';

const withAuth = function (req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        res.json({ success: false, msg: 'Unauthorized: No token provided' });
    } else {
        jwt.verify(token, secret, function (err, decoded) {
            if (err) {
                res.json({ success: false, msg: 'Unauthorized: Invalid token' });
            } else {
                req.email = decoded.email;
                next();
            }
        });
    }
}
module.exports = withAuth;