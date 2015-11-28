"use strict"

var q = require("q");

module.exports = function (app, mongoose, db) {
    var users = require("./user.mock.json");
    var userSchema = require('./user.schema.js')(mongoose);
    var model = mongoose.model("cs5610.assignment.user", userSchema);

    var api = {
        create: createUser,
        update: updateUser,
        delete: deleteUser,
        findAll: findAllUsers,
        findById: findUserById,
        findByUserName: findByUserName,
        findUserByAuth: findUserByAuth
    }
    return api;

    function createUser(newUser) {
        var deferred = q.defer();

        model.create(newUser, function(err, user) {
            if (err) {
                deferred.reject(user);
            } else {
                deferred.resolve(user);
            }
        });

        return deferred.promise;
    }

    function updateUser(id, user) {
        var deferred = q.defer();

        model.findById(id, function(err, updateUser) {
            updateUser.firstName = user.firstName;
            updateUser.lastName = user.lastName;
            updateUser.username = user.username;
            updateUser.password = user.password;
            updateUser.email = user.email;

            updateUser.save(function(err, updatedUser) {
               if (err) {
                   deferred.reject(updatedUser);
               } else {
                   deferred.resolve(updatedUser);
               }
            });
        });

        return deferred.promise;

    }

    function deleteUser(id) {
        var deferred = q.defer();

        model.remove({_id: id}, function(err, status) {
           if (err) {
               deferred.reject(status);
           } else {
               deferred.resolve(status);
           }
        });

        return deferred.promise;
    }

    function findAllUsers() {
        var deferred = q.defer();

        model.find(function(err, users) {
            if(err) {
                deferred.reject(users);
            } else {
                deferred.resolve(users);
            }
        });

        return deferred.promise;
    }

    function findUserById(id) {
        var deferred = q.defer();

        model.findById({_id: id}, function(err, user) {
            if (err) {
                deferred.reject(user);
            } else {
                deferred.resolve(user);
            }
        });

        return deferred.promise;
    }

    function findByUserName(username) {
        var deferred = q.defer();

        model.findOne({username: username}, function(err, user) {
            if (err) {
                deferred.reject(user);
            } else {
                deferred.resolve(user);
            }
        });

        return deferred.promise;
    }

    function findUserByAuth(username, password) {
        var deferred = q.defer();

        model.findOne({username: username, password: password}, function(err, user) {
            if (err) {
                deferred.reject(user);
            } else {
                deferred.resolve(user);
            }
        });

        return deferred.promise;
    }
};