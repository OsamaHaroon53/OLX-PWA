var user = require('../userRecord/model');
var model = require('./model');
var ads = {
  title: 'Application',
  statusCode: 200
};


ads.submitAds = function (req, res) {
  user.findOne({ name: req.body.user })
    .then(user => {
      if (!user) {
        return res.status(404).send({
          statusCode: 404,
          success: false,
          message: "User Not Found"
        });
      }
      const ad = new model({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        name: req.body.name,
        price: req.body.price,
        image: req.files[0].originalname,
        contact_No: req.body.contact_No,
        location: req.body.location,
        date: new Date().toString().slice(0,15)
      });
      ad.save(function (error, data) {
        if (error) {
          console.log("error", error);
          res.status(503).send({
            statusCode: 503,
            success: false,
            message: "Server Error: Unable To Save a Data"
          });
          return;
        }
        res.status(200).send({
          statusCode: 200,
          message: "Save Successfully",
          data: data,
          success: true
        });
        //   model.find(function (err, res) {
        //     if (err) {
        //       return res.status(500).send({ error: err });
        //     }
        //         // const notificationPayload = {
        //         //   "notification": {
        //         //     "title": "Ad News",
        //         //     "body": "New Ads Available!",
        //         //     "icon": "assets/olx-logo.png",
        //         //     "vibrate": [100, 50, 100],
        //         //     "data": {
        //         //       "dateOfArrival": Date.now(),
        //         //       "primaryKey": 1
        //         //     },
        //         //     "actions": [{
        //         //       "action": "explore",
        //         //       "title": "Go to the site"
        //         //     }]
        //         //   }
        //         // };
        //         // Promise.all(res.map(sub => webpush.sendNotification(sub.user_subscription, JSON.stringify(notificationPayload))))
        //         //   .then(() => res.status(200).json({ message: 'Ad sent successfully.' }))
        //         //   .catch(err => {
        //         //     console.error("Error sending notification, reason: ", err);
        //         //     res.sendStatus(500);
        //         //   });
        //         // return res.status(200).send({ ad: data });
        //     //   })
        //     });
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

module.exports = ads;
