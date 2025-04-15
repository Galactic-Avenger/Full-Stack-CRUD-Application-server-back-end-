# Full-Stack CRUD Application (Back-End/Server)

This is the main repository for the client (front-end) code for the Project - Full-Stack CRUD Application.
----------
## Project-Overview


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
