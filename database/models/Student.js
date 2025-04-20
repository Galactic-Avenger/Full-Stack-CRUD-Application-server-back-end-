/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { isEmail: true },
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "/default-student.png",
  },
  gpa: {
    type: Sequelize.DECIMAL(2, 1),
    allowNull: true,
    validate: {
      min: 0.0,
      max: 4.0,
    },
  },
});


// Export the student model
module.exports = Student;