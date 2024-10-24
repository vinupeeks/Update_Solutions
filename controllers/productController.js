const productCollection = require("../models/productModel");


// Create a new product
exports.createProduct = async (req, res) => {
    try {
        const { productName, brands, services } = req.body;

        // Create a new product document
        const newProduct = new productCollection({
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
        const products = await productCollection.find({ productName: 'AC' })
            .select(`-createdAt -updatedAt`); // Fetch all products
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all products
exports.getProductsCCTV = async (req, res) => {
    try {
        const products = await productCollection.find({ productName: 'CCTV' })
            .select(`-createdAt -updatedAt`); // Fetch all products
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
// Get a product by ID
exports.getProductById = async (req, res) => {
    try {
        const product = await productCollection.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// add brands
exports.addBrands = async (req, res) => { 
    const { productId } = req.params;  
    const { brands } = req.body;  
    try {
        const updateBrand = await productCollection.findByIdAndUpdate(
            productId,
            { $addToSet: { brands: { $each: brands } } }, 
            { new: true } 
        ).select(`-createdAt -updatedAt`);

        if (!updateBrand) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(201).json({ message: "Brands added successfully", updateBrand });
    } catch (error) {
        res.status(500).json({ message: `Error occurred due to: ${error.message}` });
    }
};

// add services
exports.addservices = async (req, res) => { 
    const { productId } = req.params;  
    const { service } = req.body;  
    try {
        const updateBrand = await productCollection.findByIdAndUpdate(
            productId,
            { $addToSet: { services: { $each: service } } }, 
            { new: true }
        ).select(`-createdAt -updatedAt`);

        if (!updateBrand) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(201).json({ message: "service added successfully", updateBrand });
    } catch (error) {
        res.status(500).json({ message: `Error occurred due to: ${error.message}` });
    }
};

// delete brand 
exports.deleteBrand = async (req, res) => {
    const { productId } = req.params;
    const { brandName } = req.body;  

    try {
        const updatedProduct = await productCollection.findByIdAndUpdate(
            productId,
            { $pull: { brands: { brandName } } }, 
            { new: true }
        ).select(`-createdAt -updatedAt`);

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Brand deleted successfully", updatedProduct });
    } catch (error) {
        res.status(500).json({ message: `Error occurred due to: ${error.message}` });
    }
};

// deleting service
exports.deleteService = async (req, res) => {
    const { productId } = req.params;
    const { serviceName } = req.body;  

    try {
        const updatedProduct = await productCollection.findByIdAndUpdate(
            productId,
            { $pull: { services: { serviceName } } }, 
            { new: true }
        ).select(`-createdAt -updatedAt`);

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Service deleted successfully", updatedProduct });
    } catch (error) {
        res.status(500).json({ message: `Error occurred due to: ${error.message}` });
    }
};








 
