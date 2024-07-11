const countryLanguage = require('../models/countryLanguage');

exports.getAllCountryLanguages = async (req, res) => {
  try {
    const countryLanguages = await countryLanguage.getAll();
    res.json(countryLanguages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCountryLanguageById = async (req, res) => {
  try {
    const countryLanguage = await countryLanguage.getById(req.params.id);
    if (countryLanguage) {
      res.json(countryLanguage);
    } else {
      res.status(404).json({ message: 'Country Language not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Añade más controladores según sea necesario