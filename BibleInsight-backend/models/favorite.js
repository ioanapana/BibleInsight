const mongoose = require('mongoose');

// Define the schema for the Favorite model
const FavoriteSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  verseReference: {
    book: {
      type: String,
      required: true,
    },
    chapter: {
      type: Number,
      required: true,
    },
    verse: {
      type: Number,
      required: true,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Export the Favorite model
module.exports = mongoose.model('Favorite', FavoriteSchema);
