"use strict"

var q = require("q");

module.exports = function (app, mongoose, db) {
    var users = require("./user.mock.json");
    var userSchema = require('./user.schema.js')(mongoose);
    var UserModel = db.model("UserModel", userSchema);

    var api = {
        create: createUser,
        update: updateUser,
        delete: deleteUser,
        findAll: findAllUsers,
        findById: findUserById,
        findByUserName: findByUserName,
        findUserByAuth: findUserByAuth
    };
    return api;

    function createUser(newUser) {
        var deferred = q.defer();
        newUser.id = newUser._id = mongoose.Types.ObjectId();

        UserModel.create(newUser, function (err, user) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(user);
            }
        });

        return deferred.promise;
    }

    function updateUser(id, user) {
        var deferred = q.defer();

        UserModel.findById(id, function (err, updateUser) {
            updateUser.firstName = user.firstName;
            updateUser.lastName = user.lastName;
            updateUser.username = user.username;
            updateUser.password = user.password;
            updateUser.email = user.email;

            updateUser.save(function (err, updatedUser) {
                if (err) {
                    deferred.reject(err);
                } else {
                    deferred.resolve(updatedUser);
                }
            });
        });

        return deferred.promise;

    }

    function deleteUser(id) {
        var deferred = q.defer();

        UserModel.remove({_id: id}, function (err, status) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(status);
            }
        });

        return deferred.promise;
    }

    function findAllUsers() {
        var deferred = q.defer();

        UserModel.find(function (err, users) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(users);
            }
        });

        return deferred.promise;
    }

    function findUserById(id) {
        var deferred = q.defer();

        UserModel.findById({_id: id}, function (err, user) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(user);
            }
        });

        return deferred.promise;
    }

    function findByUserName(username) {
        var deferred = q.defer();

        UserModel.findOne({username: username}, function (err, user) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(user);
            }
        });

        return deferred.promise;
    }

    function findUserByAuth(username, password) {
        var deferred = q.defer();

        UserModel.findOne({username: username, password: password}, function (err, user) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(user);
            }
        });

        return deferred.promise;
    }
};