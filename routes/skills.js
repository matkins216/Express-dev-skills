const express = require('express');
const router = express.Router();

const skillControllers = require('../controllers/skills')

// ---------------------------------------
router.get('/', skillControllers.index);
router.get('/new', skillControllers.new);
router.get('/:id', skillControllers.show);
router.post('/', skillControllers.create);
router.delete('/:id', skillControllers.delete);
router.get('/:id/edit', skillControllers.edit);
router.put('/:id', skillControllers.update)

module.exports = router;
