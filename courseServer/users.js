const express = require("express");
const router = express.Router();
const db = require("./db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//add new user
// let user = `SELECT email FROM users WHERE email = ${email}`;
// if (user != undefined) return res.status(400).send("User already exsist");

router.post("/", async (req, res) => {
  const {name, password, email } = req.body;
  

  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    res.status(400).send("Invalid email format");
    return;
  }

 //

 let userExists = await db.query(`SELECT email FROM users WHERE email = '${email}'`);
if (userExists.rows.length > 0) {
    return res.status(400).send("User already exists");
}
  
  let add = `INSERT INTO users (name,password,email) VALUES('${name}', '${password}', '${email}')`;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  add= `INSERT INTO users (name,password,email) VALUES( '${name}', '${hashedPassword}', '${email}')`
    // let x= `SELECT users_id FROM users WHERE email = ${email}`
    // console.log(x.rows[0])
    // let idOfUser = x.rows[0];
  try {
    let newUser = await db.query(add);
    console.log(newUser)
    const token = jwt.sign({ name , email}, 'secretkey');
    console.log(token)
    res.send({ newUser, token });
    console.log(newUser)
  } catch {
    res.status(400).send("error");
  }
});

//change user name/password/email values by id

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, password, email } = req.body;
  const query = `UPDATE users SET name = '${name}', password = '${password}', email = '${email}' WHERE users_id = ${id}`;
  try {
    const result = await db.query(query);
    res.send("User updated successfully");
  } catch (error) {
    res.status(400).send(error);
  }
});

//get all users

router.get("/", async (req, res) => {
  const query = `SELECT * FROM users`;

  try {
    const result = await db.query(query);
    res.send(result);

  } catch {
    res.status(400).send("error");
  }
});

//get user by id

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const query = `SELECT * FROM users WHERE users_id = ${id}`;

  try {
    const result = await db.query(query);
    res.send(result);
  } catch {
    res.status(400).send("error");
  }
});

// delete user by id

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM users WHERE users_id = ${id}`;

  try {
    const result = await db.query(query);
    res.send("Item deleted");
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
