const jwt = require('jsonwebtoken');
require('dotenv').config()

const auth = (req, res, next) => {

    // check header or url parameters or post parameters for token
    // var token = req.body.token || req.query.token || 'test';
    var token = req.query.token;
    // res.send(req.query.token);

    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, process.env.JWT_TOKEN_SECRET, function (err, decoded) {
            if (err) {
                return res.json({
                    success: false,
                    message: 'Failed to authenticate token.'
                });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });

    } else {

        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
};

module.exports = auth;