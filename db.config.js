const { Pool } = require("pg");

    const pool = new Pool({
        host : "localhost",
        user : "postgres",
        password : "magang123",
        database : "magangapp",
       

    })
   

    module.exports = {pool}
