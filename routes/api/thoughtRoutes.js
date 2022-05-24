const router = require("express").Router();

const {
    getThought,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
} = require("../../controllers/thoughtController");

router
    .route("/")
    .get(getThought)
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