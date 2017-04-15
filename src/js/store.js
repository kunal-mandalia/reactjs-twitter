import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const composeEnhancers = typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
const middleware=applyMiddleware(thunk);

export default function configureStore(initialState) {
	const store=createStore(reducers, initialState, composeEnhancers(middleware));
	return store;
}

