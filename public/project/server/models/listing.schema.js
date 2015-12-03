"use strict";

module.exports = function(mongoose) {
    var ListingSchema = new mongoose.Schema({
        userId: String,
        propertyType: {type: String, enum: ['APT','CON','TOW']},
        bed: Number,
        bath: Number,
        address: String,
        city: String,
        state: String,
        zip: String,
        price: Number,
        heat: Boolean,
        pet: Boolean,
        gym: Boolean,
        parking: Boolean,
        description: String,
        images:[]
    }, {collection:''});
};