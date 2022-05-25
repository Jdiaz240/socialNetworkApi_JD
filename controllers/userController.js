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
        User.find( {_id: req.params.userId })
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
            { $set: req.body },
            { new: true },
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with this id!' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    //delete user 
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No such user Id' })
                    : Thought.deletMany({ _id: { $in: user.thoughts } })
            )
            .then(() => res.json({ message: 'User and thoughts deleted!' }))
            .catch((err) => res.status(500).json(err));
    },
    addFriend(req, res) {
        // console.log('You are adding a friend');
        // console.log(req.body);
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            { new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user found with that ID :(' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    removeFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { user: { friendId: req.params.userId } } },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res
                        .status(404)
                        .json({ message: 'No student found with that ID :(' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
}

module.exports = userController;