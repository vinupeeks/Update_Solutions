const mobile_dts = require('../models/mobileDetails');
const user_dts = require('../models/User');
const UserMobileDetails = require('../models/service'); 

// add mobile service with mobile and user details
exports.addMobileDetails = async (req, res) => {
    try {
        const { model_name, company_name, name, mobileNumber, houseName, state, district, pincode } = req.body;
        const mobile_img = req.file.path;

        if (!model_name || !company_name || !mobile_img) {
            return res.status(400).json({ error: 'All fields for mobile details are required.' });
        }

        const newMobileDetails = new mobile_dts({
            model_name,
            company_name,
            mobile_img
        });

        try {
            await newMobileDetails.save();
        } catch (error) {
            console.error('Error saving mobile details:', error);
            return res.status(500).json({ error: 'Failed to save mobile details.' });
        }

        if (!name || name.trim() === '') {
            return res.status(400).json({ error: 'Name is required' });
        }

        if (!mobileNumber || mobileNumber.length !== 10 || !/^\d{10}$/.test(mobileNumber)) {
            return res.status(400).json({ error: 'Mobile number must be a valid 10-digit number' });
        }

        if (!houseName || houseName.trim() === '') {
            return res.status(400).json({ error: 'House name is required' });
        }

        if (!state || state.trim() === '') {
            return res.status(400).json({ error: 'State is required' });
        }

        if (!district || district.trim() === '') {
            return res.status(400).json({ error: 'District is required' });
        }

        if (!pincode || pincode.length !== 6 || !/^\d{6}$/.test(pincode)) {
            return res.status(400).json({ error: 'Pincode must be a valid 6-digit number' });
        }

        const newUser = new user_dts({ name, mobileNumber, houseName, state, district, pincode });
        
        try {
            await newUser.save();
        } catch (error) {
            console.error('Error saving user:', error);
            return res.status(500).json({ error: 'Failed to create user.' });
        }

        const userMobileDetails = new UserMobileDetails({
            userId: newUser._id,
            mobileId: newMobileDetails._id 
        });

       
        try {
            await userMobileDetails.save();
        } catch (error) {
            console.error('Error saving user-mobile details:', error);
            return res.status(500).json({ error: 'Failed to save user-mobile relationship.' });
        }

        return res.status(201).json({
            message: 'Mobile details added successfully and user created.',
            mobileDetails: newMobileDetails,
            user: newUser,
            userMobileDetails 
        });
    } catch (error) {
        console.error('Error occurred while adding mobile details:', error); 
        res.status(500).json({ error: `An error occurred: ${error.message}` });
    }
};

// get mobile service details
exports.getMobileDetails = async (req, res) => {
    try {
      
        const allMobileDetails = await UserMobileDetails.find()
            .populate('userId')       
            .populate('mobileId')    

        if (!allMobileDetails || allMobileDetails.length === 0) {
            return res.status(404).json({ message: 'No mobile details found' });
        }

        return res.status(200).json(allMobileDetails);
    } catch (error) {
        console.error('Error fetching mobile details:', error);
        return res.status(500).json({ message: 'An error occurred while fetching mobile details', error: error.message });
    }
};