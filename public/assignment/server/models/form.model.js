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
        updateFormField: updateFormField,
        createFormField: createFormField,
        removeFormField: removeFormField
    }

    return api;

    function createForm(form) {
        form.id = uuid.v1();
        forms.push(form);

        return form;
    }

    function updateForm(id, updatedForm) {
        for(var i=0; i<forms.length;i++) {
            if (forms[i].id === id) {
                for (var property in updatedForm) {
                    forms[i][property] = updatedForm[property];
                }
                return users[i];
            }
        }
        return null;
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
        forms.forEach(function(form){
           if (form.id === id) {
               return form;
           }
        });

        return null;
    }

    function findFormByUserId(userId) {
        var userForms = [];

        forms.forEach(function(form){
            if (form.userId === userId) {
                userForms.push(form);
            }
        });

        return userForms;
    }

    function findFormByTitle(title) {
        forms.forEach(function(form) {
            if (form.title === title) {
                return form;
            }
        });

        return null;
    }

    function getFormFields(id) {
        forms.forEach(function(form) {
            if (form.id === id) {
                return form.fields;
            }
        })

        return null;
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

    function updateFormField(id, updatedField) {
        for (var i=0; i<forms.length;i++) {
            if (forms[i].id === id) {
                var fields = forms[i]["fields"];
                for (var j=0; j<fields.length; i++) {
                    if (fields[i].id === updatedField.id) {
                        for(var property in updatedField) {
                            fields[property] = updatedField[property];
                        }
                    }
                }
                form[i]["fields"] = fields;
            }
        }

        return forms;
    }

    function removeFormField(id, fieldId) {
        for (var i=0; i<forms.length; i++) {
            if (forms[i].id === id) {
                for (var j = 0; j < forms[i]["fields"].length; i++) {
                    if (forms[i]["fields"][j].id === fieldId) {
                        forms[i]["fields"].splice(j, 1);
                    }
                }
            }
        }
        return forms;
    }
}