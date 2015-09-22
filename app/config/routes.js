import React from 'react'
import Main from '../components/Main'
import UserList from '../components/UserList'
import Profile from '../components/Profile'

import Router from 'react-router'
const {Route} = Router;

export default (
	<Route name="app" path ="/" handler={Main}>
			<Route name="userlist" path="groups/:groupId" handler={Main}>
				<Route name="userprofile" path="user/:userId" handler={Main}/>
			</Route>
	</Route>
); 