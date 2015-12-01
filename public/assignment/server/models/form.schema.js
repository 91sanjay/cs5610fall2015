"use strict"

module.exports = function(mongoose) {
    var FieldSchema = require('./field.schema.js')(mongoose);
    var FormSchema = new mongoose.Schema({
        id: mongoose.Schema.Types.ObjectId,
        title: String,
        userId: String,
        fields: [FieldSchema]
    }, {collection: "cs5610.assignment.form"});

    return FormSchema;
};