/*==================================================
/database/db.js

It sets up Sequelize with Postgres database. 
- Create a Sequelize instance to connect to the database specifying database name, username, and password.
==================================================*/
/* INSTANTIATE DATABASE */ 

// Import module dependencies
const Sequelize = require('sequelize');  // Import Sequelize
// const {dbName, dbUser, dbPwd} = require('./utils/configDB');  // Import database name, username, password

// Display a confirmation message for opening a database connection
console.log('Opening database connection');

// This is the Sequelize entry point for connecting to the database. 
const db = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Required for Render's Postgres
    },
  },
});

// Export Sequelize instance, which will be modified with models.
module.exports = db;