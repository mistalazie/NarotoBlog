const express = require('express');
const router = express.Router();
const { About } = require('../db');

router.get('/', async (req, res) => {
    try {
        const about = await About();
        res.json(about);
    }
    catch (error) {
        res.status(500).json({ message: "Error retrieving about page", error });
    }
});

module.exports = router;