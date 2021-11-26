const environment = process.env.NODE_ENV || 'dev';
console.log(`environment = ${environment}`);
require('dotenv').config({ path: `.env` });
const app = require('./app');
const populateDummyData = require('./database/database_seed');
app.listen(process.env.port, () => {
  console.log(`Express started on port ${JSON.stringify(process.env.port)}`);
  // Seed the database with some data
  if (environment === 'dev') {
    populateDummyData();
  }
});
