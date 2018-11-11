const mongoose = require('mongoose');

const TweetShema = new mongoose.Schema({
    author:  String,
    content: String,
    likes: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.Now,
    },
});

module.exports = mongoose.model('Tweet',TweetShema);