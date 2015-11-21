"use strict";

module.exports = function(app, model) {
    app.post("/api/assignment/user", createUser);
    app.get("/api/assignment/user", findUsers);
    app.get("/api/assignment/user/:id", findUserById);
    app.put("/api/assignment/user/:id", updateUser);
    app.delete("/api/assignment/user/:id", deleteUser);

    function createUser(req, res) {
        var user = req.body;

        res.json(model.create(user));
    }

    function findUsers(req, res) {
        var username = req.query.username;
        var password = req.query.password;

        if (username == null && password == null) {
           res.json(model.findAll());
        } else if (username != null && password == null) {
            res.json(model.findByUserName(username));
        } else {
            res.json(model.findUserByAuth(username, password));
        }
    }

    function findUserById(req, res) {
        var id = req.params.id;

        res.json(model.findById(id));
    }

    function updateUser(req, res) {
        var user = req.body;
        var id = req.params.id;

        res.json(model.update(id, user));
    }

    function deleteUser(req, res) {
        var id = req.params.id;

        res.json(model.delete(id));
    }
}