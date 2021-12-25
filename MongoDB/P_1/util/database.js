const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;// temp var to be used in this file

const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://User-1:1@cluster0.4opu0.mongodb.net/shop?retryWrites=true&w=majority')
    .then(client => {
      console.log('Connected!');
      _db = client.db();// connects to 'shop' mongodb.net/shop?retryWrites=true
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
}

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!'
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
