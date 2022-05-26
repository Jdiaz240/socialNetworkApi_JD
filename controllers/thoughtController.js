const { Thought, Reaction } = require("../models");


module.exports = {
    //get all thoughts
    // getThought(req, res) {
    //     Thought.find()
    //         .then((thought) => res.json(thought))
    //         .catch((err) => res.status(500).json(err));
            getThought(req, res) {
                Thought.find()
                    .then((thoughtData) => {
                        res.json(thoughtData)
                    }).catch((err) => {
                        console.log(err)
                        res.status(500).json(err)
                    })
    },
    //get a single thought
    getSingleThought(req, res) {
        Thought.find({ _id: req.params.thoughtId })
            .then((thoughtData) =>
                !thoughtData
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : res.json(thoughtData)
            )
            .catch((err) => res.status(500).json(err));
    },
    //create a new thought
    createThought(req, res) {
        Thought.create(req.body)
            .then((thoughtData) => {
// need to add the thought to the user make sure to use the userid in the req.body

                res.json(thoughtData)
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    //delete a thought
    deleteThought(req, res) {
        Thought.findOneAndRemove({ _id: req.params.thoughtId })
            .then((thoughtData) =>
                !thoughtData
                    ? res.status(404).json({ message: 'No User with that ID' })
                    : User.deleteMany({ _id: { $in: thoughtData.user } })
            )
            .then(() => res.json({ message: 'Thought deleted!' }))
            .catch((err) => res.status(500).json(err));
    },
    //update a thought
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { thoughts: req.body } },
        )
            .then((thoughtData) =>
                !thoughtData
                    ? res
                        .status(404)
                        .json({ message: 'No User found with that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    //post a reaction
    addReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactionId: req.params.reactionId } },
            // { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with this id!' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    //delete a reaction
    deleteReaction(req, res) {
        Reaction.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reaction: req.params.reactionId } },
            // { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with this id!' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
};




