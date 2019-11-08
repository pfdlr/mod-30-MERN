const express = require('express');
const cors = require('cors');
const config = require('./config');
const mongoose = require('mongoose');
const helmet = require('helmet');
const sanitize = require('mongo-sanitize');
const path = require('path');

const app = express();

const postRoutes = require('./routes/post.routes');

const loadTestData = require('./testData');

mongoose.connect(config.DB, { useNewUrlParser: true });
let db = mongoose.connection; 
db.once('open', () => {
    console.log('Connected to the database');
    loadTestData();
  });
db.on('error', (err) => console.log('Error ' + err));

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(helmet());
app.use((req, res, next) => {
  sanitize(req.body);
  next();
});
app.use(express.static(path.join(__dirname, '/../client/build'))); // Serve static files from the React app

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

app.use('/api', postRoutes);
app.listen(config.PORT, function () {
    console.log('Server is running on port:', config.PORT);
});


