import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-details';

const App = () => (
	<div>
		<h2>Users List</h2>
		<UserList/>
		<UserDetails/>
	</div>
	);

export default App;
