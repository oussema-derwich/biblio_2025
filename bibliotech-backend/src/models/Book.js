const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true },
  genre: { type: String, required: true },
  publicationYear: { type: Number, required: true }
});

module.exports = mongoose.model('Book', bookSchema);