"use strict";

module.exports = function (app, mongoose, db, passport, LocalStrategy) {
    var userModel = require('./models/user.model.server.js')(mongoose, db, passport, LocalStrategy);
    var listingModel = require('./models/listing.model.server.js')(mongoose, db);

    var userService = require('./services/user.service.server.js')(app, userModel, passport, LocalStrategy);
    var listingService = require('./services/listing.service.server.js')(app, listingModel);
};