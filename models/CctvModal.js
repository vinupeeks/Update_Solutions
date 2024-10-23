const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName: {
        type: String,
        required: true,
    },
    brands: [
        {
            brandName: {
                type: String,
                required: true,
            }
        }
    ],
    services: [
        {
            serviceName: {
                type: String,
                required: true, // The name of the service (e.g., "Installation", "Repair")
            }
        }
    ]
}, { timestamps: true });

// Create and export the model
const CctvModal = mongoose.model('CctvModal', productSchema);

module.exports = CctvModal;
