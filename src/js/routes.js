import React from 'react';
import { Route, Link } from 'react-router';

import Login from './components/Login';
import App from './components/App';
import Profile from './components/Profile';

export default (
	<Route path='/' component={App} >
		<Route path='login' component={Login} />
		<Route path='profile' component={Profile} />
	</Route>
)