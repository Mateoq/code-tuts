const express = require('express');
const router = require('./routes');

const app = express();

app.set('view', 'ejs');
app.set('views', __dirname + '/../public/views');

app.use(express.static(__dirname + '/../public'));

require('./database');
router(app);

module.exports = app;

