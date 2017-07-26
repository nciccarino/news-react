import React, { Component } from "react"; 

// import Search from "./Search"; 

import helpers from "../utils/helpers";

class Main extends Component {
	// constructor() {
	// 	super();

	// 	this.state = {
	// 		title: "",
	// 		date: "",
	// 		url: "",
	// 		notes: "",
	// 		saved: false
	// 	}
	// }; //constructor 

	constructor() {
		super();

		this.state = {
			topic: "",
			startYear: "",
			endYear: ""
		}
	}; //constructor 

	handleChange = event => {
		console.log("handle Change called")
		this.setState({
			[event.target.id]: event.target.value
		})
	}

	handleSubmit = event => {
		event.preventDefault()
		console.log('handleSumbit called')
		this.props.makeRequest(
			this.state.topic,
			this.state.startDate,
			this.state.endDate
		)
	}

	render() {
		return (

			<div className= "container">

				<div className= "row">
					<div className= "col-xs-12">
						<form>
							<label htmlFor="topic">Topic:</label>
							<input
								type="text"
								id="topic"
								value={this.state.topic}
								onChange={this.handleChange}
							/>
							<label htmlFor="startYear">Start Year:</label>
							<input
								type="number"
								id="startYear"
								value={this.state.startDate}
								onChange={this.handleChange}
							/>
							<label htmlFor="endYear">End Year:</label>
							<input
								type="number"
								id="endYear"
								value={this.state.endDate}
								onChange={this.handleChange}
							/>
						<button onClick={this.handleSubmit}>Submit</button>
					</form>
					</div>
				</div>

			</div>

		)


	}

}; //end class Main 

export default Main; 