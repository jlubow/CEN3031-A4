//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://hello:hello1@ds123124.mlab.com:23124/assignment3-1/', //place the URI of your mongo database here.
  }, 
  googleMaps: {
    key: 'AIzaSyAOVUO8kG8pr6rf7kf6POIVVMJIwSOSp3A'
  },
  port: 8080
};