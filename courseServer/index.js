const express =require('express');
const users = require("./users");
const login = require("./login");
const subject = require('./subject')
const course = require('./course')
const changPassword = require('./changePassword')
const app = express();
const cors = require('cors');


app.use(express.json());  //convert json to JavascriptS and Javascript to json 
app.use(cors({
  origin: 'http://localhost:3001'
}));
app.use("/api/users", users);
app.use("/api/auth", login);
app.use("/api/subject", subject);
app.use("/api/course", course);
app.use("/api/changepassword", changPassword);




const port = process.env.PORT || 3000;// the value of the apep.listen(port) will be the value of the const port. else it will be default 3000 as set;
//the const port value will be set on the cmd when we run the web {example:set PORT=4000 (on cmd)}

app.listen(port, ()=> console.log(`App on port ${port}`));//port for the website;
