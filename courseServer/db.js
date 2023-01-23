const {Client} = require('pg') //npm i pg

const client= new Client({
    user:'postgres',
    host:'localhost',
    database:'courses',
    password:'3156487264',
    port:5432
})


client.connect()

module.exports=client