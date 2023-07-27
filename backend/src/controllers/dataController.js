// controllers/dataController.js
const Data = require('../models/dataModel');

// Get data
exports.getData = async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error });
  }
};

// Add data
exports.addData = async (req, res) => {
  try {
    const newData = new Data(req.body);
    await newData.save();
    res.status(201).json({ message: 'Data added successfully', data: newData });
  } catch (error) {
    res.status(500).json({ message: 'Error adding data', error });
  }
};



// Update data
exports.updateData = async (req, res) => {
  const { id } = req.params; // Assuming the request includes the ID of the data to update
  const { population } = req.body; // Assuming you want to update the "age" field

  try {
    // Find the data by ID
    const data = await Data.findById(id);

    if (!data) {
      return res.status(404).json({ message: 'Data not found' });
    }

    // Update the data
    data.population = population;
    await data.save();

    // Send the updated data to clients via WebSocket
    io.emit('dataUpdate', data);

    res.json({ message: 'Data updated successfully', data });
  } catch (error) {
    res.status(500).json({ message: 'Error updating data', error });
  }
};

