"use strict";

module.exports = function(app, model) {
    app.post("api/assignment/:userId/form", createNewForm);
    app.get("api/assignment/:userId/form", getFormsForUser);
    app.get("api/assignment/form/:formId", getFormById);
    app.delete("api/assignment/form/:formId", deleteFormById);
    app.put("api/assignment/form/:formId", updateFormById);

    function createNewForm(req, res) {
        var userId = req.params.userId;
        var form = req.body;

        res.json(model.create(form));
    }

    function getFormsForUser(req, res) {
        var userId = req.params.userId;

        res.json(model.findByUser(userId));
    }

    function getFormById(req, res) {
        var formId = req.params.formId;

        res.json(model.findById(formId));
    }

    function deleteFormById(req, res) {
        var formId = req.params.formId;

        res.json(model.delete(formId));
    }

    function updateFormById(req, res) {
        var formId = req.params.formId;
        var updatedForm = req.body;

        res.json(model.update(formId, updatedForm));
    }
};
