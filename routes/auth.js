var express = require('express');
var router = express.Router();

const Auth_Controller = require('../controllers/Auth_Controller');

router.get('/gettoken', (req, res) => {
    // ...

    const token = Auth_Controller.generateAccessToken({ username: req.query.username });
    res.json(token);

    // ...
});



module.exports = router;