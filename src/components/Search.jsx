import React, { Component } from 'react'
import axios from 'axios'
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

		// var bodyArray = []; 

		console.log('MAKE REQUEST FUNCTION:')
		console.log(topic)
		// 1) get search parameters
		// 2) make request to NYT with search parameters
		// 3) update the state.searchResults with response from NYT
		axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
			params: {
			  'api-key': "28b89b8baced4c74acdd7abdb5737fa9",
			  'q': topic,
			  'begin_date': startDate, 
			  'end_date': endDate
		  }
		}).then(function(response) {
			console.log(response) 

			this.setState({
				searchResults: [response.data.response.docs[0],
												response.data.response.docs[1],
												response.data.response.docs[2],
												response.data.response.docs[3], 
												response.data.response.docs[4]
											]
			})

		}.bind(this))

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
