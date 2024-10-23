const mobile_dts=require('../models/mobileDeatails')
const user_dts=require('../models/User')


exports.addMobileDetails = async (req, res) => {
    try {
        const { model_name, company_name,name,mobileNumber,houseName,state,district,pincode} = req.body;
        const mobile_img = req.file.path;
        if (!model_name || !company_name || !mobile_img) {
            return res.status(400).json({ error: 'All fields are required.' });
        }
        const newMobileDetails = new mobile_dts({
            model_name,
            company_name,
            mobile_img
        });
        await newMobileDetails.save();
        res.status(201).json(newMobileDetails);
    } catch (error) {
        console.error('Error occurred while adding mobile details:', error); 
        res.status(500).json({ error: `An error occurred: ${error.message}` });
    }
};


