const mongoose = require('mongoose');

const RegUserSchema = new mongoose.Schema({
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
});

  
module.exports = mongoose.model('User', RegUserSchema);

