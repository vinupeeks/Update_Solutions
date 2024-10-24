const accessoryDetails = require('../models/accessoryModel'); 

// add a new accessory
exports.addAccessory = async (req, res) => {
    try {
        const { title,brand,category, color,description,price} = req.body;
        const image = req.file.path;
        // add a new accessory document
        const newAccessory = new accessoryDetails({
            title,
            brand,
            category,
            color,
            image,
            description,
            price
        });
        // Save to the database
        await newAccessory.save();
        res.status(201).json({ message: 'Product created successfully', Accessory: newAccessory });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// get all accessory
exports.getAccessory = async (req, res) => {
    try {
        const allAccessory = await accessoryDetails.find()
        res.status(200).json(allAccessory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 