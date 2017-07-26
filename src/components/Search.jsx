import React, { Component } from 'react'
import request from 'request'
import '../App.css'
import Main from './Main.jsx'
import helpers from "../utils/helpers.js"

class Search extends Component {
	constructor() {
		super()
		this.state = {
			searchResults: []
		}
	}

	makeRequest = (topic, startDate, endDate) => {

		var bodyArray = []; 

		console.log('MAKE REQUEST FUNCTION:')
		console.log(topic)
		// 1) get search parameters
		// 2) make request to NYT with search parameters
		// 3) update the state.searchResults with response from NYT
			request.get({
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
		  bodyArray.push(body); 
		})

	}

	render() {
		return (
			<div className="App">
				<h2>Search </h2>
				<Main makeRequest={this.makeRequest} anotherProp="test" />
				{/*  Create a new Component that get the searchResults as a parameter and displays it*/}
			</div>
		)
	}
}

export default Search; 
