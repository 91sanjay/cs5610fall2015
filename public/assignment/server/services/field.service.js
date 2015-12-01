"use strict";

module.exports = function(app, model) {
    app.post("/api/assignment/form/:formId/field", createNewFormField);
    app.get("/api/assignment/form/:formId/field", getFieldsForForm);
    app.get("/api/assignment/form/:formId/field/:fieldId", getFormFieldById);
    app.delete("/api/assignment/form/:formId/field/:fieldId", deleteFormFieldById);
    app.put("/api/assignment/form/:formId/field/:fieldId", updateFormFieldById);

    function createNewFormField(req, res) {
        var formId = req.params.formId;
        var field = req.body;

        model.createFormField(formId, field)
            .then(function (form) {
               res.json(form.fields);
            });
    }

    function getFieldsForForm(req, res) {
        var formId = req.params.formId;

        model.getFormFields(formId)
            .then(function(fields) {
                res.json(fields);
            });
    }

    function getFormFieldById(req, res) {
        var formId = req.params.formId;
        var fieldId = req. params.fieldId;

        model.getFieldsForForm(formId, fieldId)
            .then(function(field) {
                res.json(field);
            });
    }

    function deleteFormFieldById(req, res) {
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;

        model.removeFormField(formId, fieldId)
            .then(function (form) {
                res.json(form);
            });
    }

    function updateFormFieldById(req, res) {
        var formId = req.params.formId;
        var fieldId = req. params.fieldId;
        var field = req.body;

        model.updateFormField(formId, fieldId, field)
            .then(function (form) {
                res.json(form);
            });
    }
};
