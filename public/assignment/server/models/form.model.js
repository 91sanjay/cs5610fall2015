"use strict";

var q = require("q");

module.exports = function(app, mongoose, db) {
    var forms = require("./form.mock.json");
    var formSchema = require('./form.schema.js')(mongoose);
    var FormModel = mongoose.model("cs5610.assignment.form", formSchema);


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
    };

    return api;

    function createForm(newForm) {
        var deferred = q.defer();

        FormModel.create(newForm, function(err, form) {
            FormModel.find(function(err, forms) {
               if (err) {
                   deferred.reject(forms);
               } else {
                   deferred.resolve(forms);
               }
            });
        });

        return deferred.promise;
    }

    function updateForm(id, updateForm) {
        var deferred = q.defer();

        FormModel.findById(id, function(err, form) {
            form.title = updateForm.title;
            //form.userId = updateForm.userId;
            //
            //for (var i=0; i<forms.fields.length; i++) {
            //    if (forms.fields[i]._id == updateForm._id) {
            //        var field = forms.field[i];
            //        var updateField = updateForm.fields[i]
            //
            //        field.label = updateField.label;
            //        field.fieldType = updateField.fieldType;
            //        field.options = updateField.options;
            //        field.placeholder = updateField.placeholder;
            //    }
            //}

            form.save(function(err, form) {
               if (err) {
                   deferred.reject(form);
               } else {
                   deferred.resolve(form);
               }
            });
        });

        return deferred.promise;
    }

    function deleteForm(id) {
        var deferred = q.defer();

        FormModel.remove({_id: id}, function(err, status) {
            if (err) {
                deferred.reject(status);
            } else {
                deferred.resolve(status);
            }
        });

        return deferred.promise;
    }

    function findFormById(id) {
        var deferred = q.defer();

        FormModel.findById(id, function(err, form) {
            if (err) {
                deferred.reject(form);
            } else {
                deferred.resolve(form);
            }
        });

        return deferred.promise;
    }

    function findFormByUserId(userId) {
        var deferred = q.defer();

        FormModel.findOne({userId: userId}, function(err, form) {
           if (err) {
               deferred.reject(form);
           } else {
               deferred.resolve(form);
           }
        });

        return deferred.promise;
    }

    function findFormByTitle(title) {
        var deferred = q.defer();

        FormModel.findOne({title: title}, function(err, form) {
            if (err) {
                deferred.reject(form);
            } else {
                deferred.resolve(form);
            }
        });

        return deferred.promise;
    }

    function getFormFields(id) {
        var deferred = q.defer();

        FormModel.findById(id, function(err, form) {
            if (err) {
                deferred.reject(form);
            } else {
                deferred.resolve(form.fields);
            }
        });

        return deferred.promise;
    }

    function getFieldForForm(formId, fieldId) {
        var deferred = q.defer();

        FormModel.findById(id, function(err, form) {
            var fields = form.fields;

            for(var i=0; i<fields.length;i++) {
                if (fields[i]._id == fieldId) {
                    deferred.resolve(fields[i]);
                }
            }
        });

        return deferred.promise;
    }

    function createFormField(id, field) {
        var deferred = q.defer();

        FormModel.findById(id, function(err, form) {
            var fields = form.fields;
            fields.push(field);
            form.fields = fields;

            form.save(function(err, updatedForm) {
                if (err) {
                    deferred.reject(updatedForm);
                } else {
                    deferred.resolve(form);
                }
            });
        });

        return deferred.promise;
    }

    function updateFormField(id, fieldId, updatedField) {
        var deferred = q.defer();

        FormModel.findById(id, function(err, form) {
            var fields = form.fields;

            for(var i=0;i<fields.lenght;i++) {
                if(fields[i]._id == fieldId) {
                    fields[i] = field;
                }
            }

            form.fields = fields;

            form.save(function(err, updatedForm) {
                if (err) {
                    deferred.reject(updatedForm);
                } else {
                    deferred.resolve(updatedForm);
                }
            });
        });

        return deferred.promise;
    }


    function removeFormField(id, fieldId) {
        var deferred = q.defer();

        FormModel.findById(id, function(err, form) {
            var fields = form.fields;

            for(var i=0; i<fields.length; i++) {
                if(fields[i]._id == fieldId) {
                    fields.splice(i, 1);
                    break;
                }
            }

            form.fields = fields;

            form.save(function(err, form) {
                if (err) {
                    deferred.reject(form);
                } else {
                    deferred.resolve(form);
                }
            });
        });

        return deferred.promise;
    }
};