const pg = require('pg');

require('dotenv').config();

const connectionString = 'postgres://amnzdvktpklsci:a98fc677e12461dd27be17d90b031067c66855ffd8e5964228e6b887c33b4c54@ec2-52-19-170-215.eu-west-1.compute.amazonaws.com:5432/dd1rb7amso6vui' || process.env.DATABASE_URL;


if (!process.env.DATABASE_URL) {
  module.exports = new pg.Client({
    connectionString: connectionString,
    ssl: { rejectUnauthorized: false },
  });
} else {
  module.exports = new pg.Client(process.env.DATABASE_URL);
}