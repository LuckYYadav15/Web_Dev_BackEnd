const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://User-1:1@cluster0.4opu0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(result => {
      console.log('Connected!');
      callback(result);
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports = mongoConnect;
