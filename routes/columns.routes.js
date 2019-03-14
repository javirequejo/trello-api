const express = require('express');
const router = express.Router();

const columnsController = require('../controllers/columns.controller');

router.get('/', columnsController.getAllColumns);
router.post('/', columnsController.createColumn);
router.get('/:id', columnsController.getOneColumn);
router.put('/:id', columnsController.updateColumn);
router.delete('/:id', columnsController.deleteColumn);

module.exports = router;