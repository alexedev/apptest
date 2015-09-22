import React from 'react'
import {RouteHandler} from 'react-router';

export default React.createClass({
	render() {
		const user = this.props.user;
		return (
			<div>
				<h3>User</h3>
				<b>Name:</b> {user.name?user.name:"-"}<br/>
				<b>Surname:</b> {user.surname?user.surname:"-"}<br/>
				<b>Average Score</b>: {user.average_score}<br/>
				<b>Id</b>: {user.id}<br/>
				<b>Group Id</b>: {user.group_id}<br/>
				<b>Active</b>: {user.active?"Yes":"No"}<br/>

			</div>
		); 
	}
});