const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderNumber: { type: Number, unique: true },
  itemId: { type: mongoose.Schema.Types.ObjectId, ref: "Item" },
  price: Number,
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
  deliveryVehicleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DeliveryVehicle",
  },
  isDelivered: { type: Boolean, default: false },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = { Order };
