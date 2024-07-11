const db = require('../config/database');

class countryLanguage {
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM countrylanguage');
    return rows;
  }

  static async getById(id) {
    const [rows] = await db.query('SELECT * FROM countrylanguage WHERE ID = ?', [id]);
    return rows[0];
  }

  // Añade más métodos según sea necesario
}

module.exports = countryLanguage;