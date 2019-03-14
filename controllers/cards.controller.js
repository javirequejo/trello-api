const Card = require('../models/card.model');

const createError = require('http-errors');

module.exports.getAllCards = (req, res, next) => {
  Card.find()
    .then(cards => res.json(cards))
    .catch(next)
};

module.exports.createCard = (req, res, next) => {
  const card = new Card(req.body);
  card.save()
  .then(card => res.sendStatus(201).json(card))
  .catch(next)
};

module.exports.getOneCard = (req, res, next) => {
  Card.findById(req.params.id)
    .then(card => {
      if (!card) {
        throw createError(404, 'Card not found');
      } else {
      res.json(card);
      }
    })
    .catch(next)
};

module.exports.updateCard = (req, res, next) => {
  Card.findByIdAndUpdate(req.params.id)
    .then(card => {
      if (!card) {
        throw createError(404, 'Card not found');
      } else {
      res.json(card);
      }
    })
    .catch(next)
};

module.exports.deleteCard = (req, res, next) => {
  Card.findByIdAndDelete(req.params.id)
  .then(card => {
    if (!card) {
      throw createError(404, 'Card not found');
    } else {
    res.status(204).json();
    }
  })
  .catch(next);
};