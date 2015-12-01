"use strict"

module.exports = function (mongoose) {
    var UserSchema = new mongoose.Schema({
        id: mongoose.Schema.Types.ObjectId,
        firstName: String,
        lastName: String,
        username: String,
        password: String,
        email: String
    }, {collection: 'cs5610.assignment.user'});

    return UserSchema;
};