import db from '../config/db-config';

class CpfDb {
  constructor() {
    this.db = db;
  }

  async find(query) {
    return new Promise((resolve, reject) => {
      this.db.all(query, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
}

module.exports = CpfDb;
