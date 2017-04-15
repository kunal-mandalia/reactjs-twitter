import React from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory, match } from 'react-router';

import configureStore from './store';
import routes from './routes';

let preloadedState=window.__USER_INFO__;
let store=configureStore(preloadedState);
const app=document.getElementById('app');

match({ history: browserHistory, routes }, (error, redirectLocation, renderProps) => {
	render(<Provider store={store}>
				<Router {...renderProps} />
		   </Provider>, app);
});