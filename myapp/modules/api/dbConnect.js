var mongoose = require('mongoose');

var url='mongodb://OLX-PWA:OsamaHaroon53@ds211592.mlab.com:11592/olx';
mongoose.Promise=global.Promise;
mongoose.connect(url,{ useNewUrlParser: true });
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'CONNECTION ERROR :'));
db.once('open', function () {
  console.log('CONNECTION OPENED!!')
  return db;
});