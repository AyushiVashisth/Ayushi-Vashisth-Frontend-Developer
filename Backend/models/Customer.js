const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: String,
  city: String,
});
const Customer = mongoose.model("Customer", customerSchema);

module.exports = { Customer };
