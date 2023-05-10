const mongoose = require('mongoose');

// Define the schema for the User model
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    // Make sure to hash passwords before storing
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

// Export the User model
module.exports = mongoose.model('User', UserSchema);
