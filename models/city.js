const db = require('../config/database');

class City {
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM city');
    return rows;
  }

  static async getById(id) {
    const [rows] = await db.query('SELECT * FROM city WHERE ID = ?', [id]);
    return rows[0];
  }

  // Añade más métodos según sea necesario
}

module.exports = City;