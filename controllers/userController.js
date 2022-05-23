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
    //get all users
    getUsers(req, res) {
        User.find()
            .then((userData) => {
                res.json(userData)
            }).catch((err) => {
                console.log(err)
                res.status(500).json(err)
            })
    },
    //get one user
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
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { thoughts: req.body } },
        )
    },
    //delete user 
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No such user Id' })
                    : Thought.deletMany({ _id: { $in: user.thoughts } })
            )
            .then(() => res.json({ message: 'User and thoughts deleted1' }))
            .catch((err) => res.status(500).json(err));
    },
    
}

module.exports = userController;