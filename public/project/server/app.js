"use strict";

module.exports = function(app, mongoose, db, passport, localStrategy) {
    var userModel = require('.models/user.model.js')(mongoose, db, localStrategy);
    var listingModel = require('./models/listing.model.js')(mongoose, db);

    var userService = require('./services/user.service.js')(app, userModel);
    var listingService = require('./services/listing.service.js')(app, listingModel);
};