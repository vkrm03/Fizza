const mongoose = require('mongoose');

const OrderedItemSchema = new mongoose.Schema({
  src: { type: String, required: true },
  pizzaName: { type: String, required: true },
  size: { type: String, required: true },
  price: { type: String, required: true },
  quantity: { type: Number, required: true }
});

const OrdersSchema = new mongoose.Schema({
  UserId: { type: String, required: true },
  Address: { type: String, required: true, unique: true },
  Phone: { type: String, required: true},
  Ordered_Items: { type: [OrderedItemSchema], required: true },
  Ordered_Time: { type: String, required: true },
  Status: { type: String, required: true },
  Total_Amount: { type: String, required: true }
});

module.exports = mongoose.model('Orders', OrdersSchema);
