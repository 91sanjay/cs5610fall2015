"use strict";

module.exports = function(mongoose) {
    var ListingSchema = new mongoose.Schema({
        userId: String,
        propertyType: {type: String, enum: ['APT','CON','TOW']},
        bed: Number,
        bath: Number,
        formattedAddress: String,
        address: String,
        city: String,
        state: String,
        neighborhood: String,
        locality: String,
        zip: String,
        price: Number,
        heat: Boolean,
        pet: Boolean,
        gym: Boolean,
        parking: Boolean,
        description: String,
        images: [String]
    }, {collection: 'cs5610.project.listing'});

    return ListingSchema;
};