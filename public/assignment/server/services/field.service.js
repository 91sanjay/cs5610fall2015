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

        res.json(model.createFormField(formId, field));
    }

    function getFormFieldById(req, res) {
        var formId = req.params.formId;

        res.json(model.getFormFields(formId));
    }

    function getFieldsForForm(req, res) {
        var formId = req.params.formId;
        var fieldId = req. params.fieldId;

        res.json(model.getFieldForForm(formId, fieldId));
    }

    function deleteFormFieldById(req, res) {
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;

        res.json(model.removeFormField(formId, fieldId));
    }

    function updateFormFieldById(req, res) {
        var formId = req.params.formId;
        var fieldId = req. params.fieldId;
        var field = req.body;

        res.json(model.updateFormField(formId, fieldId, field));
    }
}
