const blogs = require("./blogsArray");

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/");

const db = mongoose.connection;

db.on("error", (error) => {
    console.log(error);
});
db.once("connected", () => {
    console.log("Database is running");
});

const blogsSchema = new mongoose.Schema({
    title: String,
    content: String,
    tags: [String],
});

const aboutSchema = new mongoose.Schema({
    title: {
        type: String,
        default: "About NarutoVerse Blog",
    },
    introduction: {
        type: String,
        default:
            "Welcome to NarutoVerse, your go-to blog for everything related to the world of Naruto!",
    },
    sections: [
        {
            title: {
                type: String,
                required: true,
            },
            content: {
                type: String,
                required: true,
            },
        },
    ],
    closing: {
        type: String,
        default:
            "We welcome every fan, whether you're a longtime follower or just discovering Naruto's world. Subscribe to stay up-to-date with our latest articles and share your thoughts in the comments. Together, let's continue the journey of following our ninja way, one post at a time.",
    },
    tagline: {
        type: String,
        default: "Believe it! 🌀",
    },
});

const Blog = mongoose.model("Blog", blogsSchema);

async function insertBlogs() {
    try {
        const result = await Blog.insertMany(blogs);
        console.log("Blogs inserted successfully", result);
    } catch (err) {
        console.log("Error while inserting blogs", err);
    } finally {
        mongoose.connection.close();
    }
}

const About = mongoose.model("About", aboutSchema);

// insertBlogs();

module.exports = { Blog, About };
