const mongoose = require('mongoose');
const mongoose = require('mongoose');

// Define the schema for the Note model
const NoteSchema = new mongoose.Schema({
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

      verse: {
        type: Number,
        required: true,
      },
    },
    content: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
});

// Export the Note model
module.exports = mongoose.model('Note', NoteSchema);
