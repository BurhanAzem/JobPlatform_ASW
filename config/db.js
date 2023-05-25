const mysql = require("mysql2");

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
<<<<<<< HEAD
  password: 'system',
=======
  password: '',
>>>>>>> 8fcfa5a01c02b26b4e2e44134faade0059426f1f
  database: 'jobsplatform'
});
db.getConnection(() => {
  console.log("connect to db successfully");
});
module.exports = db;


// const mysql = require('mysql2');

// // Create a connection
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'system',
//   database: 'jobsplatform'
// });

// // Connect to the database
// db.connect((err) => {
//   if (err) {
//     console.error('Error connecting to the database: ', err);
//     return;
//   }
//   console.log('Connected to the database!');
  
//   // Perform database operations here
  
//   // Close the connection when done
//   db.end();
// });

// module.exports = db;
