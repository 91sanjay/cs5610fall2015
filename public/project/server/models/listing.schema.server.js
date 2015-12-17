"use strict";

module.exports = function (mongoose) {
    var PlaceSchema = require('./place.schema.server.js')(mongoose);
    var ListingSchema = new mongoose.Schema({
        userid: String,
        propertyType: {type: String, enum: ['APT', 'CON', 'TOW']},
        bed: String,
        bath: String,
        place_details: PlaceSchema,
        rent: String,
        heat: String,
        pets: String,
        gym: String,
        parking: String,
        description: String,
        images: [String]
    }, {collection: 'cs5610.project.listing'});

    return ListingSchema;
};