var model = require('./model');
var jwt = require('jsonwebtoken');

var record = {
    title: 'Application',
    statusCode: 200
}
record.signUp = function (req, res) {
    var postBody = req.body;
    res.set('Content-Type', 'application/json');
    model.find({ contact_No: postBody.contact_No }, function (err, data) {
        if (err) {
            res.send({
                statusCode: 500,
                success: false,
                message: " Internal Server Error"
            });
        } else if (data.length !== 0) {
            console.log(data);
            res.send({
                statusCode: 404,
                success: false,
                message: "Contact Number Found"
            });
        }
        else {
            var data = {
                name: postBody.name,
                password: postBody.password,
                email: postBody.email,
                contact_No: postBody.contact_No
            }
            var addData = new model(data);
            addData.save(function (err, newdata) {
                if (err) {
                    res.send({
                        statusCode: 503,
                        success: false,
                        message: "Server Error: Unable To Save a Data"
                    });
                }
                else {
                    const user = { id: postBody.contact_No };
                    const token = jwt.sign({ user }, 'my_secret_key');
                    res.send({
                        statusCode: 200,
                        message: "signUp Successfully",
                        data: newdata,
                        success: true,
                        token: token
                    });
                }
            });

        }
    });
};


record.signIn = function (req, res) {
    var postBody = req.body;
    model.findOne({ contact_No: postBody.contact_No, password: postBody.password }, function (err, data) {
        if (err) {
            res.send({
                statusCode: 500,
                success: false,
                message: " Internal Server Error"
            });
        } else if (!data) {console.log(data)
            res.send({
                statusCode: 404,
                success: false,
                message: "Email or Password is Invalid"
            });
        }
        else {
            const user = { id: postBody.contact_No };
            const token = jwt.sign({ user }, 'my_secret_key');
            res.send({
                statusCode: 200,
                message: "Login Successfully",
                data: data,
                success: true,
                token: token
            });
        }
    });
};

module.exports = record;