import React from 'react';
import NavBar from './navbar';

const Register = React.createClass({
	render: function(){
		return (
			<div className = "register">
				<NavBar/>
				<label>First Name</label>
				<input type = 'text'></input>
				<label>Last Name</label>
				<input type = 'text'></input>
				<label>Email</label>
				<input type = 'emil'></input>
				<label>Password</label>
				<input type = 'text'></input>
			</div>
		);
	}
});

export default Register;