"use strict";

module.exports = function(app) {
    var user =  require("./models/user.model.js")(app);
    var form =  require("./models/form.model.js")(app);

    require("./services/user.service.js")(app, user);
    require("./services/form.service.js")(app, form);
    require("./services/field.service.js")(app, form);
}
