const accessoryDetails = require('../models/accessoryModel'); 

// add a new accessory
exports.addAccessory = async (req, res) => {
    try {
        const { title,brand,category, color,description,price} = req.body;
        // add a new accessory document
        const newAccessory = new accessoryDetails({
            title,
            brand,
            category,
            color,
            description,
            price
        });
        // Save to the database
        await newAccessory.save();
        res.status(201).json({ message: 'Product created successfully', Accessory: newAccessory });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};