const accessoryDetails = require('../models/accessoryModel');

// add a new accessory
exports.addAccessory = async (req, res) => {
    try {
        const { title, brand, category, color, description, price } = req.body;
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
        .select(`-createdAt -updatedAt`);
        res.status(200).json(allAccessory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// get accessory by id
exports.getViewAccessory = async (req, res) => {
    try {
        const { id } = req.params
        const viewAccessory = await accessoryDetails.findById(id)
            .select(`-createdAt -updatedAt`);
        res.status(200).json(viewAccessory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// update accessory
exports.updateAccessory = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, brand, category, color, description, price, image } = req.body;
        const uploadedAccessoryImage = req.file ? req.file.filename : image;

        const updatedAccessory = await accessoryDetails.findByIdAndUpdate(
            id, 
            { title, brand, category, color, description, price, image: uploadedAccessoryImage },
            { new: true } 
        )


        if (!updatedAccessory) {
            return res.status(404).json({ message: "Accessory not found" });
        }
        
        await updatedAccessory.save();
        res.status(201).json(updatedAccessory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// delete accessory
exports.deleteAccessory = async (req, res) => {
    try {
        const { id } = req.params
        const deletedAccessory = await accessoryDetails.findByIdAndUpdate({_id:id})
            .select(`-createdAt -updatedAt`);
        res.status(200).json(deletedAccessory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

