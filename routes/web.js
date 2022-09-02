const express = require('express');
const router = express.Router();

const SMS_Controller = require('../controllers/SMS_Controller');
const NCB_Controller = require('../controllers/NCB_Controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.json({ message: "Hello from server!" });
});

router.get('/SCB', SMS_Controller.gen_qrcode);

router.get('/file_txt', NCB_Controller.create_file_txt);

router.get('/mail', NCB_Controller.mail);


module.exports = router;
