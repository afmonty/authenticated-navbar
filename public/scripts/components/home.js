import React from 'react';
import NavBar from './navbar';

const Home = React.createClass({
	render: function(){
		return (
		<div className = 'homePage'>
			<NavBar/>
			<h1>Home Page</h1>
		</div>
		);
	}
});

export default Home;