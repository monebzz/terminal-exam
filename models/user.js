const mongoose = require('mongoose');

// Attraction Schema
const attractionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  entryFee: {
    type: Number,
    required: true,
    min: 0
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  }
});

// Visitor Schema
const visitorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: /.+\@.+\..+/
  },
  visitedAttractions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Attraction'
    }
  ]
});

// Review Schema
const reviewSchema = new mongoose.Schema({
  attraction: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Attraction',
    required: true
  },
  score: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  comment: {
    type: String
  }
});

// Export Models
module.exports = {
  Attraction: mongoose.model('Attraction', attractionSchema),
  Visitor: mongoose.model('Visitor', visitorSchema),
  Review: mongoose.model('Review', reviewSchema)
};