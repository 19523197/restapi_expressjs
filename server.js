const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
const {pool} = require("./db.config");

// const taskController = require('./controller/task.controller');
// const userController = require('./controller/user.controller');



const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(`<h1>API Works !!!</h1>`)
});


app.get('/api/users', async (req, res) => {
    const allUsers = await pool.query("SELECT * FROM users");
    res.json(allUsers.rows)
});

app.post('/api/user', async (req, res) => {
    try{
    const {name,email,password} = req.body;
    const newUser = await pool.query("INSERT INTO users (name,email,password) VALUES ($1,$2,$3) RETURNING *", [name,email,password]);
    
    res.json(newUser.rows)
}
catch(e){
    console.error(e);
}
    
});

app.put('/api/user', async (req, res) => {
    const {id,name,password} = req.body;
    const updateUser = await pool.query("UPDATE users SET name = $2 ,password = $3 WHERE id = $1 RETURNING *",[id,name,password]);

    res.json(updateUser.rows);
});

app.delete('/api/user/:id', async (req, res) => {
    const {id} = req.params;
    const deleteUser = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *",[id]);

    res.json(deleteUser.rows);
});




app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})