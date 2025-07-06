const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log('Connected to MongoDB');

  // Sample products
  const products = [
    { name: 'Milk', price: 30 },
    { name: 'Eggs', price: 60 },
    { name: 'Bread', price: 25 },
    { name: 'Apples', price: 120 },
  ];

  try {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Sample products added successfully!');
  } catch (err) {
    console.error('Failed to insert products:', err);
  } finally {
    mongoose.disconnect();
  }
});
