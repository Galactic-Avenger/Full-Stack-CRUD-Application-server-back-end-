/*==================================================
/database/db.js

It sets up Sequelize with Postgres database. 
- Create a Sequelize instance to connect to the database specifying database name, username, and password.
==================================================*/
/* INSTANTIATE DATABASE */ 

require('dotenv').config();
const Sequelize = require('sequelize');

console.log('Opening database connection');

const isProduction = process.env.NODE_ENV === 'production';
const connectionString = process.env.DATABASE_URL;

let db;

if (isProduction && connectionString) {
  // For Render or other production environments
  db = new Sequelize(connectionString, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });
} else {
  // For local development — fallback to explicit credentials
  const dbName = 'starter-server';
  const dbUser = 'postgres'; // update if needed
  const dbPwd = '1025';      // make sure this is a string!

  db = new Sequelize(dbName, dbUser, dbPwd, {
    host: 'localhost',
    dialect: 'postgres',
  });
}

module.exports = db;
