const db = require('../util/database');

const Cart = require('./cart');


module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  // its a promise so we need to return a value
  save() {
    return db.execute('INSERT INTO products (title, price, imageUrl, description) VALUES(?, ?, ?, ?)',
      [this.title, this.price, this.imageUrl, this.description]); // inserting elements
  }

  static deleteById(id) {
  }

  static fetchAll() {
    return db.execute('SELECT * FROM products');    //returns a promise
  }

  static findById(id, cb) {
    return db.execute('SELECT * FROM products WHERE products.id = ?', [id]);
  };
}
