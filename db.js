const { Pool } = require('pg');

const pool = new Pool({
  user: 'missy',
  database: 'vps_proj',
  // password: '',
  port: 5432,
  host: 'localhost',
});

module.exports = { pool };