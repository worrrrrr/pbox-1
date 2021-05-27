import mongoose from 'mongoose';

const Schema = mongoose.Schema


const userSchema = new Schema({
    name: String,
    userid: String,
    profile: String,
    blogs: [{title: String, description: String}]
})

const User = mongoose.model('users', userSchema)

export default User