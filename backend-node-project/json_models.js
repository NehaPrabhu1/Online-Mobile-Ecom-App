const { readFileSync, writeFileSync } = require('fs');
const moment = require('moment');

//---------------reading from json files-----------------------
let loadUsers = () => JSON.parse(readFileSync('json files/users.json'));

let loadBrands = () => JSON.parse(readFileSync('json files/brands.json'));

let loadCategories = () =>
  JSON.parse(readFileSync('json files/categories.json'));

let loadVendors = () => JSON.parse(readFileSync('json files/vendors.json'));

let loadProducts = () => JSON.parse(readFileSync('json files/products.json'));

let loadOrders = () => JSON.parse(readFileSync('json files/orders.json'));

let loadOrderItems = () =>
  JSON.parse(readFileSync('json files/orderitems.json'));

let loadDeliveryAddress = () =>
  JSON.parse(readFileSync('json files/delivery_address.json'));

//-------------------------------------------------------------------------------------

//--------------------------write to json files---------------------------------
let writeUser = (user) => {
  const users = loadUsers();
  user.id = users.length + 1;
  users.push(user);
  const userJson = JSON.stringify(users);
  writeFileSync('json files/users.json', userJson);
};

let writeProduct = (product) => {
  const products = loadProducts();
  product.id = products.length + 1;
  products.push(product);
  const productJSON = JSON.stringify(products);
  writeFileSync('json files/products.json', productJSON);
};

let writeVendor = (vendor) => {
  const vendors = loadVendors();
  vendor.id = vendors.length + 1;
  vendors.push(vendor);
  const vendorJSON = JSON.stringify(vendors);
  writeFileSync('json files/vendors.json', vendorJSON);
};

let writeOrder = (order) => {
  const orders = loadOrders();
  order.id = orders.length + 1;
  order.orderdate = moment().format('YYYY-MM-DD');
  order.orderime = moment().format('HH:mm:ss');
  orders.push(order);
  console.log(order);
  const orderJSON = JSON.stringify(orders);
  writeFileSync('json files/orders.json', orderJSON);
};

let updateProduct = (product) => {
  const products = loadProducts();
  for (let i = 0; i < products.length; i++) {
    if (products[i].id == product.id) {
      products.splice(i, 1, product);
      products[i] = product;
    }
  }
  //products.push(product);
  const productJSON = JSON.stringify(products);
  writeFileSync('json files/products.json', productJSON);
};

let deleteProduct = (productid) => {
  const products = loadProducts();
  let indexToDelete = 0;
  for (let i = 0; i < products.length; i++) {
    if (products[i].id == productid) {
      indexToDelete = i;
    } else if (products[i].id > productid) {
      products[i].id--;
    }
  }
  products.splice(indexToDelete, 1);
  const productJSON = JSON.stringify(products);
  writeFileSync('json files/products.json', productJSON);
};

let updateVendor = (vendor) => {
  const vendors = loadVendors();
  for (let i = 0; i < vendors.length; i++) {
    if (vendors[i].id == vendor.id) {
      vendors.splice(i, 1, vendor);
      vendors[i] = vendor;
    }
  }
  //products.push(product);
  const vendorJSON = JSON.stringify(vendors);
  writeFileSync('json files/vendors.json', vendorJSON);
};

let deleteVendor = (vendorid) => {
  const vendors = loadVendors();
  let indexToDelete = 0;
  for (let i = 0; i < vendors.length; i++) {
    if (vendors[i].id == vendorid) {
      indexToDelete = i;
    } else if (vendors[i].id > vendorid) {
      vendors[i].id--;
    }
  }
  vendors.splice(indexToDelete, 1);
  const vendorJSON = JSON.stringify(vendors);
  writeFileSync('json files/vendors.json', vendorJSON);
};
//--------------------------------------------------------------------------

module.exports = {
  loadUsers,
  loadBrands,
  loadCategories,
  loadVendors,
  loadProducts,
  loadDeliveryAddress,
  loadOrders,
  loadOrderItems,
  writeUser,
  writeProduct,
  writeVendor,
  writeOrder,
  updateProduct,
  deleteProduct,
  updateVendor,
  deleteVendor,
};
