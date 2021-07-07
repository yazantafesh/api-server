'use strict';

const pool = require('../../pool');

class DataCollection {
  constructor(table, name) {
    this.table = table;
    this.name = name;
  }

  create(obj) {
    const sql = `INSERT INTO ${this.name} (name,price) VALUES ($1,$2) RETURNING *;`;
    
    const safeValues = [obj.name, obj.price];
    return pool.query(sql, safeValues);
  }

  read(id) {
    if (id) {
      return pool.query(`SELECT * FROM ${this.name} WHERE id=$1;`, [id]);
    }
    return pool.query(`SELECT * FROM ${this.name};`);
  }

  update(id, obj) {
    const sql = `UPDATE ${this.name} SET name=$1,price=$2 WHERE id=$3 RETURNING *;`;
    const safeValues = [obj.name, obj.price, id];
    return pool.query(sql, safeValues);
  }

  delete(id) {
    return pool.query(`DELETE FROM ${this.name} WHERE id=$1 RETURNING *;`, [id]);
  }
}

module.exports = DataCollection;