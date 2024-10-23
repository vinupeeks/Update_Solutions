const express = require('express');
const connectDB = require('./config/db.js');
const cctvDetails = require('./routes/UserRoutes.js');

const cors = require('cors');
require('dotenv').config();

const app = express();
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Route
// app.use('/auth', authRoutes)
// // Admin Routes 
// app.use('/users', UserRoutes);


// // User Routes
app.use('/CCTV-Details', cctvDetails);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
