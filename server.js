const express = require('express');
const connectDB = require('./config/db.js');
const AdminLeaves = require('./routes/mobileDetailsRoutes.js');

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

// app.use('/admin-absence', AdminAbsence); 

// // User Routes
// app.use('/User-works', UserWorks); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
