const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

// Functionality
router.get('/', (req, res) => {res.render('home') })
router.get('/recipes', controller.view);


module.exports = router;