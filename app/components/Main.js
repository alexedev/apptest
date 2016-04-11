import React from 'react';
import Router from 'react-router'
import _ from 'underscore'
import Group from './Group'
import UserInGroup from './UserInGroup'
import Profile from './Profile'

const groups = [
 	{"title": "БТК-01", "id": 1},
	{"title": "ТБ-91", "id": 2},
    {"title": "ТБ-92", "id": 3},
]

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
		var groupNodes = groups.map(function (group) {
            var user_count = _.filter(users, function(user) {
                return user.group_id == group.id
            }).length;
      		return (
      			<li><Group name={group.title} count={user_count} key={group.id} groupId={group.id} /></li>
      		);
    	});
		if (!!this.getParams().groupId) {
			let groupId = parseInt(this.getParams().groupId,10);
			const groupObj = _.findWhere(groups, {id:groupId});
			const usersInGroup = _.where(users, {group_id:groupId});
			const userNodes = usersInGroup.map((user) => {
	      		return (
	      			<li><UserInGroup user={user} key={user.id} /></li>
	      		);
	    	});
	    	var groupOut;
			if (!!groupObj) {
				var userNodesCond = !!userNodes.length?userNodes:"No Users here";
				var title = `User List in Group ${groupObj.title}`
				groupOut = <div><h3>{title}</h3><br/>{userNodesCond}</div>;
			} else {
				groupOut = <h3>Группы с таким Id не существует</h3>
			}

		}
		if (!!this.getParams().userId) {
			let userId = parseInt(this.getParams().userId,10);
			const userObj = _.findWhere(users, {id:userId});
			var userOut = <Profile user={userObj}/>;
		}
		return (
			<div className="container">
				<h1>Test App</h1>
				<div className="row">
					<div className="col-md-2">
						<h3>Groups</h3>
						{groupNodes}
					</div>
					<div className="col-md-4">
						{groupOut?groupOut:<div></div>}
					</div>
					<div className="col-md-4">
						{userOut?userOut:<div></div>}
					</div>
			    </div>
			</div>
		)
	}
})