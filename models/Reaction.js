const { Schema, model, Types } = require("mongoose");
const dateFormat = require('../utils/dateFormat')

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            //default value set id to new data type, add or automatic?
            default: ()=> new Types.ObjectId()
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
            default: Date.now
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    },
);



module.exports = reactionSchema;


