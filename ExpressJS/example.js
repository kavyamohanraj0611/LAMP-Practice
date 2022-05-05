const express = require('express');
const app = express();

app.get('/users', (req, res) => {
    res.json(users)
})

app.get('/users/:userId', (req, res) => {
    const user = getUser(req.params.userId)

    if (!user) return res.status(404).json("Can't find the data")

    return res.json(user)
})

const getUser = (userId) => users.find(u => u.id === parseInt(userId))

const users = [{
    id: 1000,
    name: 'Kavya'
}, {
    id: 1001,
    name: 'Tony'
}, {
    id: 1002,
    name: 'Stark'
}, {
    id: 1003,
    name: 'Scarlet'
}]

app.listen(9000, () => {
    console.log("Server is running");
})
