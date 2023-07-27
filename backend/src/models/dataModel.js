// models/dataModel.js
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  // Define the fields for your data here
  stateName: { type: String, required: true },
  population: { type: Number, required: true },
//   email: { type: String, required: true },
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
