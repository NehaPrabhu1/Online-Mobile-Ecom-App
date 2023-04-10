const { readFileSync, writeFileSync } = require('fs');

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
};
