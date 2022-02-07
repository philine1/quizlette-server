const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');


router.get('/', userController.index);
router.get('/:id', userController.show);
router.patch('/:id/points', userController.updatePoints);
router.patch('/:id/wins', userController.updateWins);
router.patch('/:id/points/reset', userController.resetPoints);
router.post('/', userController.create);

module.exports = router;