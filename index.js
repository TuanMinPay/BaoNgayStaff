const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const path = require('path');
const initMongo = require('./config/mongo');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'))
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(require('./app/routes'));
const i18n = require('i18n');

// i18n
i18n.configure({
    locales: ['en'],
    directory: `${__dirname}/locales`,
    defaultLocale: 'en',
    objectNotation: true
});
app.use(i18n.init);

app.listen(process.env.PORT, () => {
    console.log('BaoNgayStaff © 2020 Power by BaoNgay Corp - Port:', process.env.PORT);
});

// Init MongoDB
initMongo();