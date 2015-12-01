"use strict";

module.exports = function(app, model) {
    app.post("/api/assignment/:userId/form", createNewForm);
    app.get("/api/assignment/:userId/form", getFormsForUser);
    app.get("/api/assignment/form/:formId", getFormById);
    app.delete("/api/assignment/form/:formId/user/:userId", deleteFormById);
    app.put("/api/assignment/form/:formId/user/:userId", updateFormById);

    function createNewForm(req, res) {
        console.log("enter");
        var userId = req.params.userId;
        var form = req.body;
        form.userId = userId;

        model.create(userId,form)
            .then(function(forms) {
                res.json(forms);
            });
    }

    function getFormsForUser(req, res) {
        var userId = req.params.userId;

        model.findByUser(userId)
            .then(function(forms) {
                res.json(forms);
            });
    }

    function getFormById(req, res) {
        var formId = req.params.formId;

        model.findById(formId)
            .then(function(form) {
                res.json(form);
            });
    }

    function deleteFormById(req, res) {
        var formId = req.params.formId;
        var userId = req.params.userId;

        model.delete(formId, userId)
            .then(function(forms) {
                res.json(forms);
            });
    }

    function updateFormById(req, res) {
        var formId = req.params.formId;
        var userId = req.params.userId;
        var updatedForm = req.body;

        model.update(formId, userId, updatedForm)
            .then(function(forms) {
                res.json(forms);
            });
    }
};
