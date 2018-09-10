var express = require('express');
var router = express.Router();
require('./api/dbConnect');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  });
  const uploads = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 20
    }
  });


var userRecord = require('./api/userRecord/userRecord');

router.post('/signup',userRecord.signUp);
router.post('/signin',userRecord.signIn);

var adsRecord = require('./api/adsRecord/submitAds');
router.post('/posting', uploads.any(), adsRecord.submitAds);

var getAllads = require('./api/adsRecord/getAllAds');
router.get('/allCategory',getAllads.getAll);

var getCategoryAds = require('./api/adsRecord/categoryAds');
router.get('/Category/:categoryName',getCategoryAds.getCategoryAds);

var getAd = require('./api/adsRecord/getAd');
router.get('/post/:_id',getAd.getAd);

module.exports = router;