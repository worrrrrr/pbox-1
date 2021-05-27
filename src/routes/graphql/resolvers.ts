import Blog from "$lib/models/BlogModel"
import Post from "$lib/models/Post.model"
import User from "$lib/models/UserModel"

export const resolvers = {
    Query: {
        getAllBlogs: async () => {
            return await Blog.find()
        },
        getAllPosts: async () => {
            return await Post.find()
        },
        getAllUsers: async () => {
            return await User.find()
        }
    },
    Mutation: {
        createPost: async (parent, args, context, info) => {
            const { title, description } = args.post
            const post = new Post({ title, description })
            await post.save()
            return post
        },
        createUser: async (parent, args, context, info) => {
            const { name, userid } = args.user
            const user = new User({ name, userid })
            await user.save()
            return user
        },
        createBlog: async (parent, args, context, info) => {
            const { title, description,siteurl } = args.blog
            const blog = new Blog({ title, description,siteurl,parent})
            await blog.save()
            return blog
        }
    }
}