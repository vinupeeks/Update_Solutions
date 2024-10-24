
const mongoose = require('mongoose');

const Ac_CctvDetailsSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    Ac_cctvId: { type: mongoose.Schema.Types.ObjectId, ref: 'ac_cctv_Details', required: true },
}, { timestamps: true });

module.exports = mongoose.model('ac_cctv_serDetails', Ac_CctvDetailsSchema);
