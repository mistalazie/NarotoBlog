const express = require('express');
const app = express();
const cors = require('cors')
const blogRouter = require('./routes/blog');
const aboutRouter = require('./routes/about');
const galleryRouter = require('./routes/gallery');

app.use(cors());

app.use('/', blogRouter);
app.use('/about', aboutRouter);
app.use('/gallery', galleryRouter);

const port = 3000;


app.listen(port, () => {
    console.log("App is running");
});