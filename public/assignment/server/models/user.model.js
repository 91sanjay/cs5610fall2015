module.exports = function (app) {
    var users = require("./user.mock.json");
    var uuid = require('node-uuid');

    var api = {
        create: createUser,
        findAll: findAllUsers,
        findById: findUserById,
        findUserByAuth: findUserByAuth,
        updateUser: updateUser,
        deleteUser: deleteUser,

    }
    return api;

    function createUser(user) {
        user.id = uuid.v1();
        user.push(user);

        return user;
    }

    function findAllUsers() {
        return users;
    }

    function findUserById(id) {
        users.forEach(function(user) {
           if (user.id === id) {
               return user;
           }
        });

        return null;
    }

    function findUserByAuth(username, password) {
        users.forEach(function(user) {
            if (user.username === username && user.password === password) {
                return user;
            }
        });

        return null;
    }

    function updateUser(id, updatedUser) {
        var user = findUserById(id);

        for(var property in updatedUser) {
            user[property] = updatedUser[property];
        }

        return user;
    }

    function deleteUser(id) {
        users.forEach(function(user) {
           if (user.id === id) {
               users.splice(users.indexOf(user), 1);
           }
        });

        return users;
    }
}