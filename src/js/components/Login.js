import React from 'react';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';

import { login } from '../actions/userActions';

@connect((store) => {
	return {
		users: store.users
	};
})

export default class Login extends React.Component {
	constructor() {
		super();
		this.state={
			username: '',
			password: ''
		};
	}

	getUsername(e) {
		this.setState({
			username: e.target.value
		});
	}

	getPassword(e) {
		this.setState({
			password: e.target.value
		});
	}

	requestLogin() {
		const { username, password }=this.state;
		this.props.dispatch(login(username, password));
		this.setState({
			username: '',
			password: ''
		});
		browserHistory.push('/profile');
	}

	render() {
		const { username, password }=this.state;

		return (
			<div class="container">
				<div class="col-md-2"></div>
				<div class="col-md-8">
					<h2>Login</h2>
					<br />
					<div>
						<div class="input-group col-md-8">
							<input type="text" class="form-control" placeholder="Username" 
							value={username} onChange={this.getUsername.bind(this)} />
						</div>
						<br />
						<div class="input-group col-md-8">
							<input type="password" class="form-control" placeholder="Password"
							value={password} onChange={this.getPassword.bind(this)} />
						</div>
						<br />
						<div class="btn btn-primary col-md-8" onClick={this.requestLogin.bind(this)}>Log in</div>
					</div>
				</div>
				<div class="col-md-2"></div>
			</div>
		)
	}
}