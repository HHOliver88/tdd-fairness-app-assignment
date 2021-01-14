const Constants         = require("../config/constants");
const Controller        = require('./controller');

class CatalogController extends Controller {

    constructor(req, res) {
        super(req, res);
    }
    
    index() {
		this.page_params.PAGE.title = "Catalog";
        this.page_params.PAGE.view = "index";

        this.res.render("layouts/catalog.layout.ejs", this.page_params);
    }
}
module.exports = CatalogController;