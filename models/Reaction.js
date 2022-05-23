const { Schema, model } = require("mongoose");

const reactionSchema = new Schema(
    {
        id: {
            type: Schema.Types.ObjectId,
            //default value set to new data type, add or automatic?
        },
        reactionBody: {
            type: String,
            required: true,
            //character limit 280 maximum,
        },
        username: {
            //refernce user
        },
        createdAt: {
            type: Date,
            get: timestamp => dateFormat(timestamp),
            default: //add default time function, moment js?,
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


