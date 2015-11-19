module.exports = function (app) {
    var users = require("./user.mock.json");
    var uuid = require('node-uuid');

    var api = {
        create: createUser,
        update: updateUser,
        delete: deleteUser,
        findAll: findAllUsers,
        findById: findUserById,
        findUserByAuth: findUserByAuth
    }
    return api;

    function createUser(user) {
        user.id = uuid.v1();
        user.push(user);

        return user;
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
}