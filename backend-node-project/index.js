const {
  loadUsers,
  loadProducts,
  loadBrands,
  writeUser,
  loadCategories,
  loadVendors,
  writeProduct,
  writeVendor,
  writeOrder,
  loadOrders,
  updateProduct,
  deleteProduct,
} = require('./json_models');

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const body_parser = require('body-parser'); //used to parse data
app.use(body_parser.json());

app.listen(3000, () => {
  console.log('Server is running');
});
app.get('/', (req, res) => res.send('Welcome'));

app.get('/users', (req, res) => res.send(loadUsers()));

app.get('/products', (req, res) => res.send(loadProducts()));

app.get('/brands', (req, res) => res.send(loadBrands()));

app.get('/categories', (req, res) => res.send(loadCategories()));

app.get('/vendors', (req, res) => res.send(loadVendors()));

app.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const products = loadProducts();
  products.filter((product) => {
    if (product.id == id) {
      res.send(product);
    }
  });
});

app.get('/brands/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const brands = loadBrands();
  brands.filter((brand) => {
    if (brand.id == id) {
      res.send(brand);
    }
  });
});

app.get('/categories/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const categories = loadCategories();
  categories.filter((category) => {
    if (category.id == id) {
      res.send(category);
    }
  });
});

app.get('/vendors/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const vendors = loadVendors();
  vendors.filter((vendor) => {
    if (vendor.id == id) {
      res.send(vendor);
    }
  });
});

app.get('/users/:email/:password', (req, res) => {
  const email = req.params.email;
  const password = req.params.password;
  const users = loadUsers();
  users.filter((user) => {
    if (user.email == email && user.password == password) {
      res.send(user);
    }
  });
});

app.get('/orders/user/:userid', (req, res) => {
  const userid = parseInt(req.params.userid);
  const orders = loadOrders();
  const sendOrders = [];
  orders.filter((order) => {
    if (order.userid == userid) {
      sendOrders.push(order);
    }
  });
  res.send(sendOrders);
});

app.post('/users/addUser', (req, res) => {
  const user = req.body;
  writeUser(user);
  res.status(201).send('user added');
});

app.post('/products/addProduct', (req, res) => {
  const product = req.body;
  writeProduct(product);
  res.status(201).send('product added');
});

app.post('/vendors/addVendor', (req, res) => {
  const vendor = req.body;
  writeVendor(vendor);
  res.send(201).send('vendor added');
});

app.post('/orders/addOrder', (req, res) => {
  const order = req.body;
  writeOrder(order);
  res.send(201).send('order added');
});

//--------------put = update ------------------------//
app.put('/product/updateProduct', (req, res) => {
  const product = req.body;
  updateProduct(product);
});

//---------------delete--------------------------//
app.delete('/product/deleteProduct/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  deleteProduct(id);
});
