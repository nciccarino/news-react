module.exports= function(app) {

	app.get({
	  url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
	  qs: {
	    'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
	    'q': topic,
	    'begin_date': startDate, 
	    'end_date': endDate
	  },
	}, function(err, response, body) {
	  body = JSON.parse(body);
	  console.log(body);
	})

}// end module.exports