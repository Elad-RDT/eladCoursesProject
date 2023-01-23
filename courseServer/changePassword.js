const express = require("express");
const router = express.Router();
const db = require("./db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.put("/", async (req, res) => {
    try {
      // Get the user's current password, new password, and email from the request body
      const currentPassword = req.body.currentPassword;
      const newPassword = req.body.newPassword;
      const anotherNewPassword = req.body.anotherNewPassword;
      const email = req.body.email;
  
      // check if both new passwords match
      if (newPassword !== anotherNewPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
      }
  
      // Fetch the user from the database by email
      const user = await db.query("SELECT * FROM users WHERE email = $1", [email]);
      console.log(user)
      console.log(user.rows[0].password)
  
      // Compare the current password with the password stored in the database
      const isValidPassword = await bcrypt.compare(currentPassword, user.rows[0].password);
  
      // If the password is incorrect, return an error
      if (!isValidPassword) {
        return res.status(401).send({ error: "Incorrect password" });
      }
      
      // check if the new password is different from the current password
      if(currentPassword === newPassword) {
        return res.status(400).json({ message: 'New password should be different from the current password' });
      }
      
  
      // Hash the new password
      const salt = await bcrypt.genSalt(10);
      const hashedNewPassword = await bcrypt.hash(newPassword, salt);
  
      // Update the password in the database
      await db.query("UPDATE users SET password = $1 WHERE email = $2", [
        hashedNewPassword,
        email,
      ]);
  
      // Return a success message
      res.send({ message: "Password changed successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: "Internal server error" });
    }
  });
module.exports= router;