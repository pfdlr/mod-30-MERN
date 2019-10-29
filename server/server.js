const express = require('express');
const cors = require('cors');
const app = express();
const config = require('./config');
const postRoutes = require('./routes/post.routes');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', postRoutes);

app.listen(config.PORT, function () {
    console.log('Server is running on port:', config.PORT);
});
