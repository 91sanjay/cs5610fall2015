"use strict";

module.exports = function(app, model) {
    app.post('/api/project/listing/:userid', createListing);
    app.get('/api/project/listing/:userid', findAllListingsForUser);
    app.delete('/api/project/listing/:listingid/user/:userid', deleteListing);

    function createListing(req, res) {
        var listing = req.body;
        var userid = req.params.userid;

        model.Create(listing)
            .then(function(newListing) {
                res.json(newListing);
            });
    }

    function findAllListingsForUser(req, res) {
        var userid = req.params.userid;

        model.FindAll(userid)
            .then(function(listings) {
                res.json(listings);
            });
    }

    function deleteListing(req, res) {
        var listingid = req.params.listingid;
        var userid = req.params.userid;

        model.Delete(listingid, userid)
            .then(function(listings) {
                res.json(listings);
            });
    }
};