const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const { query, request } = require("express");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    port: 3307,
    password:"root999",
  database: "registersystem",
});

app.get('/registers',(req,res) => {
    db.query("SELECT * FROM register", (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
  });



  app.post('/create', (req, res) => {
    // const firstName = req.body.firstName;
    // const lastName = req.body.lastName;
    // const email = req.body.email;
    // const password = req.body.password;
    // const confirmPassword = req.body.confirmPassword;

    const {
      firstName ,
      lastName,
      email,
      password,
      confirmPassword,
    } = req.body

    db.query(
      "INSERT INTO register (firstName, lastName, email, password, confirmPassword) VALUES (?,?,?,?,?)",
      [firstName, lastName, email, password, confirmPassword],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    )
    })

    console.log("Hello");

  app.listen('3001',() =>{
    console.log('Server is runing on port 3001')
  })
  