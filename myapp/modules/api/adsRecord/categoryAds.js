var model = require('./model');
var ad={};
ad.getCategoryAds = function (req, res) {
    console.log(req.params.categoryName);
    model.find({category: req.params.categoryName}).then(ads => {
        if (ads.length==0) {
            return res.send({
                statusCode: 404,
                success: false,
                message: "ads Not Found"
            });
        }
        console.log(ads);
        res.status(200).send({
            statusCode: 200,
            message: "Send Data Successfully",
            data: ads,
            success: true
          });

    }).catch(err => {
        console.log(err);
        res.send({
          statusCode: 500,
          success: false,
          message: err.name
        });
      });
}
module.exports = ad;