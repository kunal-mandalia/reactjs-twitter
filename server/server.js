import express from 'express';
import webpack from 'webpack';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackDevMiddleware from 'webpack-dev-middleware';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import bodyParser from 'body-parser';
import session from 'express-session';

import configureStore from '../src/js/store';
import routes from '../src/js/routes';
import config from '../webpack.config';

let app=new express();
let compiler=webpack(config);

app.use(session({ secret: 'app' }));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.use(webpackHotMiddleware(compiler));
app.use(webpackDevMiddleware(compiler));

/*app.get(['/', '/login', '/profile'], (req, res) => {
	let renderFullPage=(html, preloadedState) => {
		return `
			<!DOCTYPE html>
			<html>
			<head>
				<meta charset="utf-8">
				<meta http-equiv="X-UA-Compatible" content="IE=edge">
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" 
				integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
				<title>Twitter</title>
			</head>
			<body>
				<div id="app">${html}</div>
				<script>
					window.__USER_INFO__=${JSON.stringify(preloadedState)}
				</script>
				<script src="client.min.js"></script>
			</body>
			</html>
		`;
	};

	let store=configureStore();
	
	if (typeof req.session.info!=='undefined') {
		store=configureStore(req.session.info);
	}

	match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
		if (error) {
			res.status(500).send(error.message);
		} else if (redirectLocation) {
			res.redirect(302, redirectLocation.pathname+redirectLocation.search);
		} else if (renderProps) {
			let html=renderToString(<Provider store={store}>
										<RouterContext {...renderProps} />
									</Provider>);
			let preloadedState=store.getState();
			res.status(200).send(renderFullPage(html, preloadedState));
		} else {
			res.status(404).send('Not found');
		}
	});
});*/
app.use(express.static('src'))

// app.get('*', (req, res) => {

// })

app.post('/profile', (req, res) => {
	const { username, password }=req.body;
	req.session.info={
		users: {
			username,
			password
		}
	};
	// res.redirect('/profile');
	res.json({ status: 200, username })
});

app.listen(3000);