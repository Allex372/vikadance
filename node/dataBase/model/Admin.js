const { Schema, model } = require('mongoose');

const adminScheme = new Schema({
    role: { type: String, required: true },
    email: { type: String },
    password: { type: String, required: true },
}, { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } });

module.exports = model('Admin', adminScheme);
