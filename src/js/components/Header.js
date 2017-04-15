import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
	render() {
		return (
			<header>
				<nav class="navbar navbar-inverse">
					<div class="container">
						<ul class="nav navbar-nav navbar-right">
							<li><Link to='/'>Home</Link></li>
							<li><Link to='/login'>Log in</Link></li>
						</ul>
					</div>
				</nav>
			</header>
		)
	}
}