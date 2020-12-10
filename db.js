const mysql = require('mysql')
// create MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "rent_car",
});

db.connect((error) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log("MySQL Connected!");
  }
});

module.exports = db;