/**
 * Created by viveksh2 on 8/21/15.
 */

var express = require('express');
var handlerModule = require('./handlers/handlerModule');
var cors = require("cors");

var path = require("path"),
    async = require('async');
fs = require('fs');

var app = express();
app.use(cors());

/**
 * Making it to serve the files from the public directory..
 */
app.use(express.static(__dirname + '/public'));

app.get('/flights/carriers', handlerModule.flightCarrierListHandler);
app.get('/flights/carriers/:carrierName', handlerModule.flightListHandler);
app.get('/flights/carriers/:carrierName/:flightFileName', handlerModule.flightDetailsHandler);

app.listen(3000);
console.log('Now we are talking');





