const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  position: {
    type: Number,
    required: true,
    unique: true
  },
  description: {
    type: String
  },
  imageUrl: {
    type: String
  },
  label: {
    type: String
  },
  title: {
    type: String,
    required: true,
    maxlength: 100
  },
  column : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Column',
    required: true
  },
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      ret.id = doc._id;
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  }
});

const Card = mongoose.model('Card', cardSchema);
module.exports = Card;