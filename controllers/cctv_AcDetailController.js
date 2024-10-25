const cctv_acModel = require('../models/cctv_acDetailModel');
const user_dts = require('../models/User');
const Ac_CctvDetailsSchema = require('../models/Ac_CctvService'); 

// Common function to validate user details
const validateUserDetails = (userData) => {
    const { name, mobileNumber, houseName, state, district, pincode } = userData;
    
    if (!name || name.trim() === '') {
        return 'Name is required.';
    }
    if (!mobileNumber || !/^\d{10}$/.test(mobileNumber)) {
        return 'Mobile number must be a valid 10-digit number.';
    }
    if (!houseName || houseName.trim() === '') {
        return 'House name is required.';
    }
    if (!state || state.trim() === '') {
        return 'State is required.';
    }
    if (!district || district.trim() === '') {
        return 'District is required.';
    }
    if (!pincode || !/^\d{6}$/.test(pincode)) {
        return 'Pincode must be a valid 6-digit number.';
    }
    return null;
};

// Function to add service details
const addServiceDetails = async (serviceType, req, res) => {
    const { brand, description, name, mobileNumber, houseName, state, district, pincode } = req.body;

    if (!serviceType || !brand || !description) {
        return res.status(400).json({ error: 'All fields for service details are required.' });
    }

    const newServiceDetails = new cctv_acModel({
        service_type: serviceType,
        product_type: serviceType === 'CCTV' ? 'CCTV' : 'AC',  
        brand,
        description,
    });

    try {
        await newServiceDetails.save();
    } catch (error) {
        console.error(`Error saving ${serviceType.toLowerCase()} details:`, error);
        return res.status(500).json({ error: `Failed to save ${serviceType.toLowerCase()} details.` });
    }
    const userError = validateUserDetails({ name, mobileNumber, houseName, state, district, pincode });
    if (userError) {
        return res.status(400).json({ error: userError });
    }

    const newUser = new user_dts({ name, mobileNumber, houseName, state, district, pincode });

    try {
        await newUser.save();
    } catch (error) {
        console.error('Error saving user:', error);
        return res.status(500).json({ error: 'Failed to create user.' });
    }

    const serviceDetailsSchema = new Ac_CctvDetailsSchema({
        userId: newUser._id,
        Ac_cctvId: newServiceDetails._id,
    });

    try {
        await serviceDetailsSchema.save();
    } catch (error) {
        console.error('Error saving service-user relationship:', error);
        return res.status(500).json({ error: 'Failed to save service-user relationship.' });
    }

    return res.status(201).json({
        message: `${serviceType} details added successfully and user created.`,
        serviceDetails: newServiceDetails,
        user: newUser,
        serviceDetailsRelation: serviceDetailsSchema,
    });
};

// get ac/cctv services
exports.getAc_CctvDetails = async (req, res) => {
    try {
      
        const allserviceDetails = await Ac_CctvDetailsSchema.find()
            .populate('userId')       
            .populate('Ac_cctvId')    

        if (!allserviceDetails || allserviceDetails.length === 0) {
            return res.status(404).json({ message: 'No service details found' });
        }

        return res.status(200).json(allserviceDetails);
    } catch (error) {
        console.error('Error fetching service details:', error);
        return res.status(500).json({ message: 'An error occurred while fetching service details', error: error.message });
    }
};

exports.updateService=async(req,res)=>{
    try {
        const { id } = req.params;
        const updatedstatus = await Ac_CctvDetailsSchema.findByIdAndUpdate(
            id, 
            { status:'completed' },
            { new: true } 
        )
        if (!updatedstatus) {
            return res.status(404).json({ message: "service not found" });
        }
        
        await updatedstatus.save();
        res.status(201).json(updatedstatus);
  
    } catch (error) {
        console.error('Error updating service status:', error);
        return res.status(500).json({ message: 'An error occurred while updating service status', error: error.message });     
    }
}

// delete service
exports.deleteService=async(req,res)=>{
    try {
        const { id } = req.params;
        const deletedService = await Ac_CctvDetailsSchema.findByIdAndDelete({_id:id})
        if (!deletedService) {
            return res.status(404).json({ message: "service not found" });
        }
        res.status(200).json(deletedService);
  
    } catch (error) {
        console.error('Error deleting service :', error);
        return res.status(500).json({ message: 'An error occurred while deleting service ', error: error.message });
    }
}



exports.addcctvDetails = (req, res) => addServiceDetails('CCTV', req, res);

exports.addACDetails = (req, res) => addServiceDetails('AC', req, res);
