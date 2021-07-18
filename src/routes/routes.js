const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

// Functionality
router.get('/', controller.view);


module.exports = router;