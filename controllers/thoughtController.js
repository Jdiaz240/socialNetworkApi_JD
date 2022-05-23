const { Thought } = require("../models");
const { Reaction } = require("../models");

module.exports = {
    //get all thoughts
    getThoughts(req, res) {
        Thought.find()
            .then((thought) => res.json(courses))
            .catch((err) => res.status(500).json(err));
    },
    //get a single thought
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughid })
            .select('-_v')
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    //create a new thought
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => res.json(thought))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    //delete a thought
    deleteThought(req, res) {
        Thought.findOneAndRemove({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No User with that ID' })
                    : User.deleteMany({ _id: { $in: thought.user } })
            )
            .then(() => res.json({ message: 'User and Thought deleted!' }))
            .catch((err) => res.status(500).json(err));
    },
    //update a thought
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { thoughts: req.body } },
        )
            .then((thought) =>
                !thought
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
          { _id: req.params.reactionId },
          { $addToSet: { reaction: req.body } },
          { runValidators: true, new: true }
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
        Thought.findOneAndUpdate(
          { _id: req.params.reactionId },
          { $pull: { reaction: { reactionId: req.params.reactionId } } },
          { runValidators: true, new: true }
        )
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No thought with this id!' })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
      },
}




