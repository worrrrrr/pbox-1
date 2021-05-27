import mongoose from 'mongoose';

const Schema = mongoose.Schema

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    siteurl:{
        type: String,
        required: true,
    },
    author: String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    },
    likes: [{ body: String, author: String }]
})

const Blog = mongoose.model('Blogs', blogSchema)

export default Blog 