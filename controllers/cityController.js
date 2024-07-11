const City = require('../models/city');

exports.getAllCities = async (req, res) => {
  try {
    const cities = await City.getAll();
    res.json(cities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCityById = async (req, res) => {
  try {
    const city = await City.getById(req.params.id);
    if (city) {
      res.json(city);
    } else {
      res.status(404).json({ message: 'City not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Añade más controladores según sea necesario