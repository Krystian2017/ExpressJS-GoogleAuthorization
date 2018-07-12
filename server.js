var express = require('express');
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var config = require('./config');
var app = express();
var googleProfile = {};

app.listen(3000);
app.use(function (req, res, next) {
  res.status(404).send('Wybaczm, nie mogliśmy odnaleźć tego, czego żądasz!')
});

