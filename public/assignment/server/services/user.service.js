"use strict";

module.exports = function(app, model) {
    app.post("api/assignment/user", createUser);
    app.get("api/assignment/user", findUsers);
    app.get("api/assignment/user/:id", findUserById);
    app.put("api/assignment/user/:id", updateUser);
    app.delete("api/assignment/user/:id", deleteUser);

    function createUser(req, res) {
        var user = req.body;

        model.create(user).then(function(newUser){
            res.json(newUser);
        },function() {
           console.log("Unable to create user");
        });
    }

    function findUsers(req, res) {
        var username = req.query.username;
        var password = req.query.password;

        if (username === null && password === null) {
            model.findAll().then(function(users){
                res.json(users);
            }, function(){
               console.log("Unable to retrieve Users");
            });
        } else if (username != null && password === null) {
            model.findByUserName(username).then(function(user) {
                res.json(user);
            });
        } else {
            model.findUserByAuth(username, password).then(function(user) {
                res.json(user);
            })
        }
    }

    function findUserById(req, res) {
        var id = req.params.id;

        model.findById(id).then(function(user) {
            res.json(user);
        });
    }

    function updateUser(req, res) {
        var user = req.body;
        var id = req.params.id;

        model.update(id, user).then(function(user) {
            res.json(user);
        });
    }

    function deleteUser(req, res) {
        var id = req.params.id;

        model.delete(id).then(function(users) {
           res.json(users);
        });
    }
}