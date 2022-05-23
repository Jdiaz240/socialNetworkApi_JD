const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
} = require('../../controllers/thoughtController');

router
    .route("/")
    .get(getThoughts)
    .post(createThought)

router
    .route("/api/thoughts/:thoughtId")
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

router
    .route("api/thoughts/:thoughtId/reactions")
    .get(getSingleReaction)
    .put(updateReaction)
    .delete(deleteReaction);

module.exports = router;