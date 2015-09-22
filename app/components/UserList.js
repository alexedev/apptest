import React from 'react'
import Router, {RouteHandler} from 'react-router'
import _ from 'underscore'
import UserInGroup from './UserInGroup'
import Profile from './Profile'

const users = [
	{
	 "id": 12,
	 "average_score": 3.3,
	 "name": "Вова",
	 "surname": "Путин",
	 "group_id": 1,
	 "active": true
	}, 
	{
	 "id": 11,
	 "average_score": 2.4,
	 "name": "Вася",
	 "surname": "Пупкин",
	 "group_id": 1,
	 "active": false
	}, 
	{
	"id": 13,
	 "average_score": 2.9,
	 "name": "Валерка",
	 "surname": null,
	 "group_id": 2,
	 "active": true
	}
]

export default React.createClass({
	mixins: [Router.State],
	render() {
		let groupId = parseInt(this.getParams().groupId,10); {/*this gets param :groupId from current url*/}
		let userId = this.getParams().userId? parseInt(this.getParams().userId,10):null;
	    const usersInGroup = _.where(users, {group_id:groupId});
		const userNodes = usersInGroup.map(function (user) {
	      		return (
	      			<li><UserInGroup user={user} key={user.id} /></li>
	      		);
	    	});
		const userObj = userId?_.findWhere(users, {id:userId}):null

		return (
			<div>
				<div className="col-md-4">
					<h3>User List in Group with Id:{groupId}</h3>
					{userNodes}
				</div>
				{userId?<Profile user={userObj}/> :<div></div>}
			</div>
		); 
	}
});