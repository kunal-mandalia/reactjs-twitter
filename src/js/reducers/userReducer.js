const initialState = {
	username: '',
	busy: false,
	isLoggedIn: false,
}

export default function reducer(state=initialState, action) {
	switch (action.type) {
		case 'LOG_IN_REQUEST':
			return Object.assign({}, state, { busy: true })
		case 'LOG_IN_SUCCESS':
			return Object.assign({}, state, { username: action.username, isLoggedIn: true, busy: false })
		case 'LOG_IN_ERROR':
			return initialState
	}

	return state;
}