"use strict";

module.exports = function (app, model, passport, LocalStrategy) {
    app.post("/api/project/user", createUser);
    app.get("/api/project/user", findUsers);
    app.get("/api/project/user/:id", findUserById);
    app.put("/api/project/user/:id", updateUser);
    app.delete("/api/project/user/:id", deleteUser);
    //app.get("/api/project/user/loggedin", loggedin);
    //app.get("/api/project/user/logout", logout);
    //
    //passport.use(new LocalStrategy(
    //    function (username, password, done) {
    //        model
    //            .FindByAuth(username, password)
    //            .then(function (user) {
    //                if (!user) {
    //                    return done(null, false);
    //                }
    //                return done(null, user);
    //            });
    //    }));
    //
    //passport.serializeUser(function (user, done) {
    //    done(null, user);
    //});
    //
    //passport.deserializeUser(function (user, done) {
    //    //model.FindUserById(user._id).then(function (user) {
    //    //    done(null, user);
    //    //}, function (err) {
    //    //    console.log(err);
    //    //    done(err);
    //    //});
    //
    //    done(null, user);
    //});
    //
    //app.post("/api/project/user/login", passport.authenticate('local'), function (req, res) {
    //    var user = req.user;
    //    res.json(user);
    //});
    //
    //function loggedin(req, res) {
    //    res.send(req.isAuthenticated() ? req.user : '0');
    //}
    //
    //function logout(req, res) {
    //    req.logOut();
    //    res.send(200);
    //}

    function createUser(req, res) {
        var user = req.body;

        model.Create(user)
            .then(function (newUser) {
                res.json(newUser);
            });
    }

    function findUsers(req, res) {
        var username = req.query.username;
        var password = req.query.password;

        if (username == null && password == null) {
            model.FindAllUsers()
                .then(function (users) {
                    res.json(users);
                });
        } else if (username != null && password == null) {
            model.FindByUserName(username)
                .then(function (user) {
                    res.json(user);
                });
        } else {
            model.FindByAuth(username, password)
                .then(function (user) {
                    res.json(user);
                });
        }
    }

    function findUserById(req, res) {
        var id = req.params.id;

        model.FindUserById(id)
            .then(function (user) {
                res.json(user);
            });
    }

    function updateUser(req, res) {
        var user = req.body;
        var id = req.params.id;

        model.Update(id, user)
            .then(function (updatedUser) {
                res.json(updatedUser);
            });
    }

    function deleteUser(req, res) {
        var id = req.params.id;

        model.Delete(id)
            .then(function (users) {
                res.json(users);
            });

        res.json(model.delete(id));
    }
};