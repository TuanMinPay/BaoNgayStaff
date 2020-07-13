const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const path = require('path');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(bodyParser.json());
app.set('view engine', 'html');
app.use(require('./app/routes'));

app.listen(process.env.PORT, function () {
    console.log('BaoNgayStaff © 2020 Power by BaoNgay Corp - Port: ', process.env.PORT);
});