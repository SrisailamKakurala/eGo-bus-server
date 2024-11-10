const mongoose = require('mongoose');

const parentSchema = new mongoose.Schema({
    schoolId: {
        type: String,
        required: true
    },
    busNo: {
        type: String,
        required: true
    },
    tripNo: {
        type: String,
        required: true
    },
    studentId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    parentName: {
        type: String,
        required: true
    },
    rollNo: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    schoolName: {
        type: String
    }
}, {
    timestamps: true // Adds createdAt and updatedAt timestamps automatically
});

module.exports = mongoose.model('Parent', parentSchema);
