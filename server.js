const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Aquí importaremos las rutas más adelante
const cityRoutes = require('./routes/cityRoutes');
const countryRoutes = require('./routes/countryRoutes');
const countryLanguageRoutes = require('./routes/countryLanguageRoutes');

app.use('/api/cities', cityRoutes);
app.use('/api/countries', countryRoutes);
app.use('/api/languages', countryLanguageRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});