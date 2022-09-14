const { Pool } = require("pg");

    const pool = new Pool({
        host : "ec2-44-209-158-64.compute-1.amazonaws.com",
        user : "qputtgyidacyqb",
        password : "ccfc6f3825ec073d84afdfae541a74add21a1bbd3de0b2375ca305572fd663b4",
        database : "d2ceegb96r1rib",
       

    })
   

    module.exports = {pool}
