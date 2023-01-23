const express = require("express");
const router = express.Router();
const db = require("./db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


router.post("/", async (req, res) => {
  const {name, password, email } = req.body;
  try{
    let idOfUser = await db.query(
      `SELECT users_id FROM users WHERE email = '${email}'`
      );
  console.log("idOfUser: "+idOfUser.rows[0])
  let userID = idOfUser.rows[0].users_id
  
  
  let user = await db.query(
    `SELECT password FROM users WHERE email = '${email}' AND name = '${name}'`
    );
    
    if (user.rows.length === 0) return res.status(400).send("Invalid user");
    let userPassword = user.rows[0].password;
    
    const validatePassword = await bcrypt.compare( password, userPassword );
    console.log(validatePassword);
    
    if (validatePassword) {
    const token = jwt.sign({ name,userID }, 'secretkey');
    res.send({ token });
    
  } else {
    res.status(400).send(validatePassword);
  }
}

catch{
  res.status(400).send("error");
}

});

module.exports = router