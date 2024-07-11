const express = require('express');
const router = express.Router();
const countryController = require('../controllers/countryController');

router.get('/', countryController.getAllCountries);
router.get('/:id', countryController.getCountryById);

// Añade más rutas según sea necesario

module.exports = router;