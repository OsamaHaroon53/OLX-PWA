var model = require('./model');
var ad={};
ad.getAd = function (req, res) {
    console.log(req.params._id);
    model.findOne({_id: req.params._id}).then(ads => {
        if (!ads) {
            return res.status(404).send({
                statusCode: 404,
                success: false,
                message: "Ad Not Found"
            });
        }
        res.status(200).send({
            statusCode: 200,
            message: "Send Ad Successfully",
            data: ads,
            success: true
          });

    }).catch(err => {
        console.log(err);
        res.status(500).send({
          statusCode: 500,
          success: false,
          message: err});
      });
}
module.exports = ad;