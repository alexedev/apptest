import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
	render() {
    	return (
      		<div className="group">
      			<Link to={`/groups/${this.props.groupId}`}>{this.props.name}</Link> ({this.props.count})<br/>
      		</div>
    	);
  	}
});