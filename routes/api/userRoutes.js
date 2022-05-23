const router = require("express").Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require("../../controllers/userController")

router.route("/").get(getUsers).post(createUser)

router
    .route("/:userId")
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser)
    .post(addFriend)
    .delete(removeFriend);
//friend routes -> add and remove friend
module.exports = router;