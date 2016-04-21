import React from 'react';
import {Link} from 'react-router';
import user from './../models/user';
import $ from 'jquery';

const Navbar = React.createClass({
	getInitialState: function(){
		return {
			user: user
		};
	},
	componentDidMount: function() {
		this.state.user.on('change', ()=>{
			this.setState({
				user: user
			});
		});	
	},
	render: function(){
		if(this.state.user.get('id')){
			return(
					<header className = 'nav'>
						<Link className="navbar-link" to="/">Home Page</Link>
						<div className = 'logout'>
							<a href="#" className="navbar-link">{this.state.user.get('firstName')}</a>
							<a href='#' onClick={this.logout}>Logout</a>
						</div>
					</header>
				);
		}
		else {
		return (
		<header className = 'nav'>
			<Link className="navbar-link" to="/">Home Page</Link>
			<Link className="navbar-link" to="login">Login</Link>
			<Link className="navbar-link" to="register">Register</Link>
			<Link className="navbar-link" to="dashboard">Dashboard</Link>
		</header>
		);
		}
	},
	logout: function(e) {
    		e.preventDefault();
    		this.state.user.clear();
    		$.ajax({
    			type: 'POST',
    			url: '/auth/logout'
    		});
    }
});

export default Navbar;

