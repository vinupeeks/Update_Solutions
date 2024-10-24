
const mongoose = require('mongoose');

const UserMobileDetailsSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    mobileId: { type: mongoose.Schema.Types.ObjectId, ref: 'MobileDetail', required: true },
}, { timestamps: true });

module.exports = mongoose.model('UserMobileDetails', UserMobileDetailsSchema);
