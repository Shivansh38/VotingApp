const mongoose = require('mongoose');

// Define the user schema

const candidateSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    party:{
        type:String,
        required:true

    },
    age:{
        type:Number,
        required:true
    },
    votes: [
        {
            user:{
                type: moongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true,
            },
            votedAt:{
                type: Date,
                default: Date.now()
            }
        }
    ],
    voteCount:{
        type:Number,
        default: 0
    }

});
// create candidate model

const candidate = mongoose.model('candidate',candidateSchema);
module.exports = candidate;