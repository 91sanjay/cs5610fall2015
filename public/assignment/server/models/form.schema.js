"use strict"

var fields = require('./field.schema.js');

module.exports = function(mongoose) {
    var FieldSchema = new FieldSchema(mongoose);
    var FormSchema = new mongoose.Schema({
        "title": String,
        "userId": String,
        "fields": [FieldSchema]
    });

    return FormSchema;
};