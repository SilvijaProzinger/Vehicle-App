import React, { Component } from 'react';
import '../App.css'

class Header extends Component {
	render(){
		return(
			<header className="header">
				<div className="headerText">
	                <h1>{this.props.text}</h1>
	                <h3>A car gallery app</h3>
	            </div>
	                <img src="https://purepng.com/public/uploads/large/51506279636bvnuzvuit3gu5f6byjptmq6q9r3cys47yzxxlkpy7h9lyklkji4e69saxpvj04p9eznkqhqzkcbrq3szi52hgxbgxghyfvt3nwz9.png" alt="header" className="headerImage"/>
            </header>
		)
	}
}

export default Header;