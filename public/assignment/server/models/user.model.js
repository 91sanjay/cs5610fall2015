module.exports = function (app) {
    var users = require("./user.mock.json");
    var uuid = require('node-uuid');

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

    function createUser(user) {
        user.id = uuid.v1();
        users.push(user);

        return users;
    }

    function updateUser(id, updatedUser) {
        for (var i=0; i<users.length; i++) {
          if(users[i].id === id) {
              for (var property in updatedUser) {
                  user[i][property] = updatedUser[property];
              }
              return users[i];
          }
        }

        return null;
    }

    function deleteUser(id) {
        users.forEach(function(user) {
            if (user.id === id) {
                users.splice(users.indexOf(user), 1);
            }
        });

        return users;
    }

    function findAllUsers() {
        return users;
    }

    function findUserById(id) {
        var userForId = null;

        users.forEach(function(user) {
            console.log(user.id == id);
           if (user.id == id) {
               userForId = user;
           }
        });

        return userForId;
    }

    function findByUserName(username) {
        var userWithName = null;

        users.forEach(function(user) {
            if (user.username == username) {
                userWithName = user;
            }
        });

        return userWithName;
    }

    function findUserByAuth(username, password) {
        var authUser = null;

        users.forEach(function(user) {
            if (user.username === username && user.password === password) {
               authUser = user;
            }
        });

        return authUser;
    }
}