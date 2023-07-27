// app.js (or server.js)
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const socketIO = require('socket.io');
const dataRoutes = require('./routes/dataRoutes');

const app = express();
const port = 3001; // Choose a port number for your backend

// Middleware
app.use(cors({
    origin: 'http://localhost:3000',
  }));
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/states', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server after successful database connection
    server.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

// Set up socket.io
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('A user connected');

  // Replace 'mycollection' with the name of your MongoDB collection
  const dataCollection = db.collection('mycollection');

  // Set up a change stream to listen for updates to the collection
  const changeStream = dataCollection.watch();
  changeStream.on('change', (change) => {
    if (change.operationType === 'insert') {
      socket.emit('dataUpdate', change.fullDocument);
    }
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Routes
app.use('/api', dataRoutes);

