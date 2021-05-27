import { gql } from "apollo-server-core";

export const typeDefs = gql`
    type Blog{
        id:ID
        title:String
        description:String
        siteurl:String
        author:User
    }
    type Post{
        id:ID
        title:String
        description:String
        body:String
    }
    type User{
        id:ID!
        name:String
        userid:String!
        profile:String
        blogs:[Blog]
    }

    type Query{
        getAllPosts:[Post]
        getAllBlogs:[Blog]
        getAllUsers:[User]
    }

    input PostInput{
        title:String
        description:String
        body:String
    }
    input UserInput{
        name:String
        userid:String
    }
    input BlogInput{
        title:String
        description:String
        siteurl:String
        author:UserInput
    }
    
    type Mutation{
        createPost(post:PostInput):Post
        createUser(user:UserInput):User
        createBlog(blog:BlogInput):Blog
    }
`