const express = require('express');
const router = express.Router();

const cardsController = require('../controllers/cards.controller');

router.get('/', cardsController.getAllCards);
router.post('/', cardsController.createCard);
router.get('/:id', cardsController.getOneCard);
router.put('/:id', cardsController.updateCard);
router.delete('/:id', cardsController.deleteCard);

module.exports = router;
