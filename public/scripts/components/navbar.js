import React from 'react';
import {Link} from 'react-router';
import user from './../models/user'

const Navbar = React.createClass({
	getInitialState: function(){
		return {
			user: user
		}
	},
	render: function(){
		return (
		<header className = 'nav'>
			<Link className="navbar-link" to="/">Home Page</Link>
			<Link className="navbar-link" to="login">Login</Link>
			<Link className="navbar-link" to="register">Register</Link>
			<Link className="navbar-link" to="dashboard">Dashboard</Link>
		</header>
		);
	}
});

export default Navbar;

