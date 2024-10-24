const CctvModal = require("../models/CctvModal");


// Create a new product
exports.createProduct = async (req, res) => {
    try {
        const { productName, brands, services } = req.body;

        // Create a new product document
        const newProduct = new CctvModal({
            productName,
            brands,
            services
        });

        // Save to the database
        await newProduct.save();

        res.status(201).json({ message: 'Product created successfully', product: newProduct });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all products
exports.getProductsAC = async (req, res) => {
    try {
        const products = await CctvModal.find({ productName: 'AC' })
            .select(`-createdAt -updatedAt`); // Fetch all products
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all products
exports.getProductsCCTV = async (req, res) => {
    try {
        const products = await CctvModal.find({ productName: 'CCTV' })
            .select(`-createdAt -updatedAt`); // Fetch all products
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// Get a product by ID
exports.getProductById = async (req, res) => {
    try {
        const product = await CctvModal.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
