const express = require(`express`);
//connects to mysql database
const mysql = require(`mysql2`);

const PORT = process.env.PORT || 3001;
const app = express();


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connect the application to the MySQL database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,  (put your user name)
      user: 'root',
      // Your MySQL password  (put your password)
      password: ''
    console.log('Connected to the election database.')
  );


  db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
  });




  // Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });


// starts the express.js server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });