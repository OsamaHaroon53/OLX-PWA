var express = require('express');
var router = express.Router();

require('./api/dbConnect');
var userRecord = require('./api/userRecord/userRecord');

router.post('/signup',userRecord.signUp);

module.exports = router;