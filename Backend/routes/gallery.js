const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    const imageDir = path.join(__dirname, "../assets");
    fs.readdir(imageDir, (err, files) => {
        if (err) {
            console.log("Failed to read dir: ", err);
            return res.status(500).json({ error: "Failed to upload images" });

        }

        const imageFiles = files.filter((file) =>
            file.match(/\.(jpeg|jpg|png|gif|webp)$/)
        );

        const imageURLs = imageFiles.map(
            (file) => `http://localhost:3000/assets/${file}`
        )

        res.json({ images: imageURLs });
    })
})

module.exports = router;