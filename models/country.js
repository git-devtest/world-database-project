const db = require('../config/database');

class Country {
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM country');
    return rows;
  }

  static async getById(id) {
    const [rows] = await db.query('SELECT * FROM country WHERE ID = ?', [id]);
    return rows[0];
  }

  // Añade más métodos según sea necesario
}

module.exports = Country;