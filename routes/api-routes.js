var db = require("../models/news.js");

module.exports= function(app) {

	app.get("api/saved", function(req, res) {

		console.log("=== All Saved Articles Route Hit ==="); 

	}); 

	app.post("api/saved", function(req, res) {

		console.log("=== Articles Post Route Hit ==="); 

	});

	app.delete("api/saved", function(req, res) {

		console.log("=== Articles Delete Route Hit ==="); 

	})

}// end module.exports