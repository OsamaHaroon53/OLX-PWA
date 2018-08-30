var users = require('./model');
var jwt = require('jsonwebtoken');

var record ={
    title : 'Application',
    statusCode : 200
}
record.signUp = function(req,res){
    
    var postBody = req.body;
      model.find({contact_No : postBody.contact_No},function (err, data) {
        if (err) {
          console.log(err)
        } else if(data.length==0) {
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
                contact_No : postBody.contact_No,  
            }
            var addData = new users(data);
            addData.save(function(err,newdata){
                if (err){
                    res.send({
                    statusCode : 505,
                    message : "Unable To Save a Data"
                });
                }
                else{
                    res.send({
                    statusCode : 200,
                    message : "Data has been saved",
                    data : newdata
                })
                }
            });
            const user  = {id:postBody.contact_No};
            const token = jwt.sign({user},'my_secret_key');
            res.send({
                        statusCode : 200,
                         message : "Login Successfully",
                         data:{name:postBody.name},
                         success : true,
                         token : token
                      })
        }
      })
};
module.exports = record;