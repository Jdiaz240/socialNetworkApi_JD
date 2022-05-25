const { Schema, model } = require("mongoose");

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            //match: look up regex ["must be an email address!"],
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "thought",
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "user",
            }
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
)

const User = model("User", userSchema);

module.exports = User;
