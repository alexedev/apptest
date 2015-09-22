import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
	render() {
		let user = this.props.user;
    	return (
      		<div className="user-in-group">
      			<Link to={`/groups/${user.group_id}/user/${user.id}`}>{user.name} <b>{user.surname}</b></Link> <br/>
      		</div>
    	);
  	}
});