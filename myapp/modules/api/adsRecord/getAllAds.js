var model = require('./model');
var ad={};
ad.getAll = function (req, res) {
    model.find().then(ads => {
        if (ads.length==0) {
            return res.status(404).send({
                statusCode: 404,
                success: false,
                message: "ads Not Found"
            });
        }
        res.status(200).send({
            statusCode: 200,
            message: "Send Data Successfully",
            data: ads,
            success: true
          });

    }).catch(err => {
        console.log(err);
        res.status(500).send({
          statusCode: 500,
          success: false,
          message: err
        });
      });
}
module.exports = ad;