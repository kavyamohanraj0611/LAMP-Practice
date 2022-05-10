const express = require('express');
const app = express();

app.use(express.json())

const users = {
    100: { name: 'Stark', practice: "LAMP" },
    101: { name: 'Natasha', practice: "BFS" },
    102: { name: 'Wanda', practice: "DOTNET" }
}

//gets all users details 
app.get('/users', (req, res) => {
    res.send(users)
})

//gets user details by id
app.get('/users/:userId', (req, res) => {

    if (!users[req.params.userId])
        return res.send("Can't find the data")

    return res.send(users[req.params.userId])
})

//create new user details with mentioned id
app.post('/users/:userId', (req, res) => {
    req.body.id = req.params.userId;
    if (req.body.name && req.body.practice) {
        const { name, practice } = req.body
        users[req.params.userId] = { name, practice }
        res.send(`Successfully created user with ID: ${req.params.userId}`)
    } else {
        res.send('Can\'t create user')
    }
})

//update user details by id
app.put('/users/:userId', (req, res) => {
    req.body.id = req.params.userId;
    if (users[req.body.id]) {
        let user = users[req.body.id]
        user.name = req.body.name || user.name
        user.practice = req.body.practice || user.practice
        res.send(user)
    } else {
        res.send(`Can\'t find the user with ID ${req.params.userId}`)
    }
})

//delete user details of mentioned id
app.delete('/users/:userId', (req, res) => {
    req.body.id = req.params.userId;
    if (users[req.body.id]) {
        delete users[req.body.id]
        res.send(`Deleted user with ID ${req.params.userId}`)
    } else {
        res.send(`Can\'t find the user with ID ${req.params.userId}`)
    }
})

app.listen(9000, () => {
    console.log("Server is running at port 9000");
})
