import React, { Component } from 'react'
import './App.css'
import { Route, Link } from 'react-router-dom'
import Home from './containers/Home.jsx'
import Saved from './containers/Saved.jsx'

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<h2>New York Times Article Scrubber</h2>
					<hr />
					<h3>Search for and Annotate Articles of Interest</h3> 
				</div>
				{/* LINKS to our different 'pages' */}
				<nav className="navbar">
					<ul className="nav">
						<li className="nav-item">
							<Link to="/" className="nav-link">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/saved" className="nav-link">
								About
							</Link>
						</li>
					</ul>
				</nav>
				{/* ROUTES that will be render to our LINKS */}
				<Route exact path="/" component={Home} />
				<Route exact path="/Saved" component={Saved} />
			</div>
		)
	}
}

export default App
