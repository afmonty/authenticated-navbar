import React from 'react';
import NavBar from './navbar';

const Login = React.createClass({
	render: function(){
		return (
			<div>
				<div className = 'nav'>
					<NavBar/>
				</div>
				<div className = "login">
					<label>User Name</label>
					<input type = 'text'></input>
					<label>Password</label>
					<input type = 'text'></input>
				</div>
			</div>
		);
	}
});

export default Login;