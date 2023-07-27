// routes/dataRoutes.js
const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// Define routes
router.get('/data', dataController.getData);
router.post('/data', dataController.addData);
router.put('/data/:id', dataController.updateData)
module.exports = router;
