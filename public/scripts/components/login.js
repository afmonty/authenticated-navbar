import React from 'react';
import NavBar from './navbar';

const Login = React.createClass({
	render: function(){
		return (
			<div className = "login">
				<NavBar/>
				<label>User Name</label>
				<input type = 'text'></input>
				<label>Password</label>
				<input type = 'text'></input>
			</div>
		);
	}
});

export default Login;