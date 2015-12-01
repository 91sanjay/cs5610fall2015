"use strict"

module.exports = function(mongoose) {
    var FieldSchema = new mongoose.Schema({
        id: mongoose.Schema.Types.ObjectId,
        label: String,
        fieldType: {type:String, enum: ["TEXT", "TEXTAREA", "RADIO", "CHECKBOX", "SELECT", "DATE"]},
        options: [{"label": String, "value": String}],
        placeholder: String
    });

    return FieldSchema;
}