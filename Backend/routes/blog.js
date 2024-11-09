const express = require('express');
const router = express.Router();

const { Blog } = require("../db");


router.get("/", async (req, res) => {
    try {
        const blogs = await Blog.find({}); // Retrieve all blogs from the collection
        res.json(blogs); // Send the blogs as JSON
    } catch (err) {
        res.status(500).json({ message: "Error retrieving blogs", error: err });
    }
});

module.exports = router;