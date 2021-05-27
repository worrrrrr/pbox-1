import mongoose from 'mongoose';

const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    author: String,
    body: String,
    comments:[{body: String,date:Date}],
    date:{type: Date,default: Date.now},
    hidden:Boolean,
    meta:{
        votes:Number,
        favs:Number
    },
    likes:[{body: String,author: String}]
})

const Post = mongoose.model('posts',postSchema)

export default Post