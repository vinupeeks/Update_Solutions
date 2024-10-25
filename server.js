const express = require('express');
const connectDB = require('./config/db.js');
const mobileDetails = require('./routes/mobileDetailsRoutes.js');
const cctvDetails = require('./routes/cctv_AcRoutes.js')
const productDetails = require('./routes/ProductRoutes.js')
const accessoryDetails=require('./routes/accessoryRoutes.js')
const categoryDetails=require('./routes/CategoryRoutes.js')

const cors = require('cors');
require('dotenv').config();

const app = express();
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Route
// app.use('/auth', authRoutes)
app.use('/mobile',mobileDetails)
// // Admin Routes 
// app.use('/users', UserRoutes);
app.use('/accessory',accessoryDetails)
app.use('/category',categoryDetails)


// // User Routes
app.use('/CCTV-Ac', cctvDetails);
app.use('/product-details', productDetails);

// using upload folder that contain images
app.use('/uploads',express.static('./uploads'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
