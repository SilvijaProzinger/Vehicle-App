import React, { Component } from 'react';
import '../App.css'

class Header extends Component {
	render(){
		return(
			<header className="header">
                <h1 className="headerText">{this.props.text}</h1>
                <h3 className="headerText">A car gallery app</h3>
            </header>
		)
	}
}

export default Header;