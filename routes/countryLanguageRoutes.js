const express = require('express');
const router = express.Router();
const countryLanguageController = require('../controllers/countryLanguageController');

router.get('/', countryLanguageController.getAllCountryLanguages);
router.get('/:id', countryLanguageController.getCountryLanguageById);

// Añade más rutas según sea necesario

module.exports = router;