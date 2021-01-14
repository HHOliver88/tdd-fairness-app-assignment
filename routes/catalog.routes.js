const Express 			    = require("express");
const CatalogRoutes 		= Express.Router();
const CatalogController     = require('../controllers/catalog.controller');

CatalogRoutes.get("/", function(req, res, next) {
    new CatalogController(req, res).index();
});

module.exports = CatalogRoutes;
