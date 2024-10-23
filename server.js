const express = require('express');
const connectDB = require('./config/db.js');
const AdminLeaves = require('./routes/mobileDetailsRoutes.js');
const cctvDetails = require('./routes/cctvRoutes.js')
const productDetails = require('./routes/ProductRoutes.js')

const cors = require('cors');
require('dotenv').config();

const app = express();
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Route
// app.use('/auth', authRoutes)
app.use('/users',mobileDetails)
// // Admin Routes 
// app.use('/users', UserRoutes);


// // User Routes
app.use('/CCTV-Details', cctvDetails);
app.use('/product-details', productDetails);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
