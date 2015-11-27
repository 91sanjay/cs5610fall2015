"use strict"

module.exports = function(mongoose) {
    var UserSchema = new mongoose.Schema({
        "firstName": String,
        "lastName": String,
        "username": String,
        "password": String,
        "email": String
    });

    this.getSchema = function() {
        return UserSchema;
    }
}