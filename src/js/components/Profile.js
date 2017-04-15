import React from 'react';
import { connect } from 'react-redux';

@connect((store) => {
	return {
		users: store.users
	};
})

export default class Profile extends React.Component {
	render() {
		let { username }=this.props.users;
		console.log(username);

		return (
			<div class="container">
				<h2>You are now logged in {username}</h2>
			</div>
		)
	}
}