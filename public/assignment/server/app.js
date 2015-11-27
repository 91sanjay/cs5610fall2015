"use strict";

module.exports = function(app, mongoose, db) {
    var user =  require("./models/user.model.js")(app, mongoose, db);
    var form =  require("./models/form.model.js")(app, mongoose, db);

    require("./services/user.service.js")(app, user);
    require("./services/form.service.js")(app, form);
    require("./services/field.service.js")(app, form);
}
