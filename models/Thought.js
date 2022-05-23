const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const dateFormat = require("../utils/dateFormat");

const thoughtSchema = new Schema(
    {
        thoughtPost: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1,
        },
        createdAt: {
            type: Date,
            get: timestamp => dateFormat(timestamp),
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [
            {
              type: Schema.Types.ObjectId,
              ref: 'Reactions',
            }
            //might cause an issue, we'll see 
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