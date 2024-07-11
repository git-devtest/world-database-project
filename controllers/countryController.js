const Country = require('../models/country');

exports.getAllCountries = async (req, res) => {
  try {
    const countries = await Country.getAll();
    res.json(countries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCountryById = async (req, res) => {
  try {
    const country = await Country.getById(req.params.id);
    if (country) {
      res.json(country);
    } else {
      res.status(404).json({ message: 'Country not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Añade más controladores según sea necesario