const { Schema, Model } = require("mongoose");
const reactionSchema = require("./Reaction");
const dateFormat = require("../utils/dateFormat");

const thoughtSchema = new Schema(
    {
        thoughtPost: {
            type: String,
            required: true,
            //add character limit
        },
        createdAt: {
            get: timestamp => dateFormat(timestamp),

        },
        username: [
            {
              type: Schema.Types.ObjectId,
              ref: 'User',
              required: true,
            },
          ],
        reactions: [
            {
              type: Schema.Types.ObjectId,
              ref: 'Reactions',
            }
          ]
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
)

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;