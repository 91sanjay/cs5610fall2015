"use strict";

module.exports = function(app, model) {
    api.post("api/assignment/:userId/form", createNewForm);
    api.get("api/assignment/:userId/form", getFormsForUser);
    api.get("api/assignment/form/:formId", getFormById);
    api.delete("api/assignment/form/:formId", deleteFormById);
    api.put("api/assignment/form/:formId", updateFormById);

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
