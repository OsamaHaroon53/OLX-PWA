var model = require('./model');
var jwt = require('jsonwebtoken');

var record ={
    title : 'Application',
    statusCode : 200
}
record.signUp = function(req,res){
    var postBody = req.body;
    res.set('Content-Type', 'application/json');
      model.find({contact_No : postBody.contact_No},function (err, data) {
        if (err) {
          console.log(err)
        } else if(data.length!==0) {
            console.log(data);
        res.send({
                    statusCode : 404,
                     message : "Contact Number Found"
                  });
        }
        else{
            var data = {
                name: postBody.name,
                password : postBody.password,
                email : postBody.email,
                contact_No : postBody.contact_No
            }
            var addData = new model(data);
            addData.save(function(err,newdata){
                if (err){
                    res.send({
                    statusCode : 505,
                    success : false,
                    message : "Unable To Save a Data"
                });
                }
                else{
                const user  = {id:postBody.contact_No};
            const token = jwt.sign({user},'my_secret_key');
            res.send({
                        statusCode : 200,
                         message : "signUp Successfully",
                         data:{name:postBody.name},
                         success : true,
                         token : token
                      });
                }
            });
            
        }
      });
};


record.signIn = function (req, res) {
    var postBody = req.body;
    model.find({contact_No: postBody.contact_No,password: postBody.password},function (err, data) {
      if (err) {
        console.log(err)
      } else if(data.length==0) {
      res.send({
                  statusCode : 404,
                  success : false,
                   message : "Email or Password is Invalid"
                });
      }
      else{
          const user  = {id:3};
          const token = jwt.sign({user},'my_secret_key');
          res.send({
                      statusCode : 200,
                       message : "Login Successfully",
                       data:{user_name:postBody.user_name},
                       success : true,
                       token : token
                    });
      }
    });
};

module.exports = record;