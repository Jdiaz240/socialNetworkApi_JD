const { Schema, model } = require("mongoose");

const reactionSchema = new Schema(
    {
        id: {
            type: Schema.Types.ObjectId,
            //default value set id to new data type, add or automatic?
        },
        reactionBody: {
            type: String,
            required: true,
            max_length: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            get: timestamp => dateFormat(timestamp),
            default: Date.now()
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    },
);

const Reaction = model("Reaction", reactionSchema);

module.exports = Reaction;


