import React from 'react';
import NavBar from './navbar';


const Dashboard = React.createClass({
	render: function(){
		return (
		<div className = 'dashboard'>
			<NavBar/>
			<h1>Dashboard</h1>
		</div>
		);
	}
});

export default Dashboard;