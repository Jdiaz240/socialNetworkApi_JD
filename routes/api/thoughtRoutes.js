const router = require("express").Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
} = require("../../controllers/thoughtController");

router
    .route("/")
    .get(getThoughts)
    .post(createThought)

router
    .route("/api/thought/:thoughtId")
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought)

router
    .route("/api/thought/:thoughtId/reaction")
    .post(addReaction)
    .delete(deleteReaction);

module.exports = router;