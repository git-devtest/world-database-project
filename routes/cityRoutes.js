const express = require('express');
const router = express.Router();
const cityController = require('../controllers/cityController');

router.get('/', cityController.getAllCities);
router.get('/:id', cityController.getCityById);

// Añade más rutas según sea necesario

module.exports = router;