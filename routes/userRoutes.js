const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// GET all
router.get('/users', userController.getUsers);

// GET one
router.get('/users/:id', userController.getUser);

// DELETE one
router.delete('/users/:id', userController.deleteUser);

// POST one
router.post('/users', userController.createUser);

module.exports = router;
