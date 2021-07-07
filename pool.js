const pg = require('pg');

require('dotenv').config();

const url = process.env.DATABASE_URL || 'postgres://amnzdvktpklsci:a98fc677e12461dd27be17d90b031067c66855ffd8e5964228e6b887c33b4c54@ec2-52-19-170-215.eu-west-1.compute.amazonaws.com:5432/dd1rb7amso6vui'

pg.defaults.ssl = process.env.NODE_ENV === 'production' && { rejectUnauthorized: false };

module.exports = new pg.Pool({
  connectionString: url,
})