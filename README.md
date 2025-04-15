# Full-Stack CRUD Application (Back-End/Server)
This is the main repository for the server (back-end) code for the Project - Full-Stack CRUD Application.
----------
## Project Overview

The server provides a robust RESTful API to power the Campus Management System. It handles data storage and retrieval using PostgreSQL and Sequelize as the ORM. The API endpoints cover all CRUD operations required to manage campus and student data. It is designed to work in tandem with the [Client-Side Repository](https://github.com/Galactic-Avenger/Full-Stack-CRUD-Application-client-front-end-), which is built using React.


----------
## Team Members
- **Abdulla Saleh** - GitHub: @Galactic-Avenger
- **Khandakar Wahiduzzaman** - GitHub: @KhandakarWahiduzzaman
- **Leo Chen** - GitHub: @lc6003

----------
### Live Link 
[Website link](https://Galactic-Avenger.github.io/Full-Stack-CRUD-Application-server-back-end-/)

----------
**Prerequisites**
- Install PostgreSQL (Postgres) [[link](https://www.postgresql.org/download/)] - required to run the database
- Install Postman [[link](https://www.postman.com/downloads/)] - optional tool for API testing 
----------
### 1. Set up and run the server (back-end) application on your local machine
1.	Start a terminal (e.g., Git Bash) on your local machine.
2.  Go to the "final-project-server" folder, enter the command to install dependencies: `npm install` 
3.	Start the server application by entering the command: `npm start` 
4.	After the server application is successfully started, its access address is at: `http://localhost:5001` 

<br/>

## Common Errors You May Encounter
### Error: password authentication failed for user "postgres"
This error is related to the user password you set for your own local Postgres database. 
#### Solution:
In the `server-starter-code/database/utils/configDB.js` file, replace the `dBpwd` value with your password for Postgres database.

```
  const dbName = 'starter-server';
  const dbUser = 'postgres';
  const dbPwd = '<your password>';
```
