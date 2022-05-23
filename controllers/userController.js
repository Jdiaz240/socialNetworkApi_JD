const { User, Thought } = require("../models");

const userController = {
//create a user
createUser(req, res) {
    User.create(req.body)
    .then((userData) => {
        res.json(userData)
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err)
    })
},
getUsers(req, res) {
    User.find()
    .then((userData) => {
        res.json(userData)
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err)
    })
},
getSingleUser(req, res) {
    User.find(req.params.userId)
    .then((userData) => {
        res.json(userData)
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err)
    })
},
//respond with a user by id
//update user
//delete user
}

module.exports = userController;