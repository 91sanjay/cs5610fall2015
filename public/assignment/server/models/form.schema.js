"use strict"

module.exports = function(mongoose) {
    var FieldSchema = require('./field.schema.js')(mongoose);
    var FormSchema = new mongoose.Schema({
        "title": String,
        "userId": String,
        "fields": [FieldSchema]
    });

    return FormSchema;
};