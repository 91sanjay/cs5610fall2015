"use strict";

module.exports = function(app) {
    var forms = require("./form.mock.json");
    var uuid = require('node-uuid');

    var api = {
        create: createForm,
        update: updateForm,
        delete: deleteForm,
        findById: findFormById,
        findByUser: findFormByUserId,
        findByTitle: findFormByTitle,
        getFormFields: getFormFields,
        getFieldForForm: getFieldForForm,
        updateFormField: updateFormField,
        createFormField: createFormField,
        removeFormField: removeFormField
    }

    return api;

    function createForm(form) {
        form.id = uuid.v1();
        forms.push(form);

        return forms;
    }

    function updateForm(id, updatedForm) {
        var currentForm = null;

        for(var i=0; i<forms.length;i++) {
            if (forms[i].id == id) {
                for (var property in updatedForm) {
                    forms[i][property] = updatedForm[property];
                }
                currentForm = forms[i];
                break;
            }
        }

        return forms;
    }

    function deleteForm(id) {
        forms.forEach(function (form) {
            if (form.id === id) {
                forms.splice(forms.indexOf(form),1);
            }
        });

        return forms;
    }

    function findFormById(id) {
        var requiredForm = null;

        forms.forEach(function(form){
           if (form.id === id) {
               requiredForm = form;
           }
        });

        return requiredForm;
    }

    function findFormByUserId(userId) {
        var userForms = [];

        forms.forEach(function(form){
            if (form.userId == userId) {
                userForms.push(form);
            }
        });

        return userForms;
    }

    function findFormByTitle(title) {
        var requiredForm = null;

        forms.forEach(function(form) {
            if (form.title === title) {
                requiredForm = form;
            }
        });

        return requiredForm;
    }

    function getFormFields(id) {
        var requiredFields = null;

        console.log(id);
        forms.forEach(function(form) {
            if (form.id == id) {
                console.log(form.fields);
                requiredFields = form.fields;
            }
        });

        return requiredFields;
    }

    function getFieldForForm(formId, fieldId) {
        var requiredField = null;

        for (var i=0; i<forms.length; i++) {
            if (forms[i].id == formId) {
                var fields = forms[i]["fields"];
                for (var j=0; j<fields.length; j++) {
                    if (fields[j].id == fieldId) {
                        requiredField = fields[j];
                        break;
                    }
                }
            }
        }

        return requiredField;
    }

    function createFormField(id, field) {
        field.id = uuid.v1();

        for(var i=0; i<forms.length; i++) {
            if(forms[i].id === id) {
                forms[i]["fields"].push(field);
                break;
            }
        }

        return forms;
    }

    function updateFormField(id, fieldId, updatedField) {
        for (var i=0; i<forms.length;i++) {
            if (forms[i].id == id) {
                var fields = forms[i]["fields"];
                for (var j=0; j<fields.length; i++) {
                    if (fields[j].id == fieldId) {
                        for(var property in updatedField) {
                            fields[j][property] = updatedField[property];
                        }
                        break;
                    }
                }
            }
        }

        return forms;
    }

    function removeFormField(id, fieldId) {
        for (var i=0; i<forms.length; i++) {
            if (forms[i].id == id) {
                var fields = forms[i].fields;

                for (var j = 0; j < fields.length; i++) {
                    if (fields[j].id == fieldId) {
                        fields.splice(j, 1);
                        break;
                    }
                }
                forms[i].fields = fields;
            }
        }
        return forms;
    }
};