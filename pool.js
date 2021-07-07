const pg = require('pg');

require('dotenv').config();

const url = process.env.DATABASE_URL || 'postgres://yazantafesh:0000@localhost:5432/lab9'

pg.defaults.ssl = process.env.NODE_ENV === 'production' && { rejectUnauthorized: false };

module.exports = new pg.Pool({
  connectionString: url,
})