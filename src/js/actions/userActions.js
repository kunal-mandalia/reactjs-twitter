import axios from 'axios';

export const loginRequest = () => ({ type: 'LOG_IN_REQUEST' })
export const loginError = (error) => ({ type: 'LOG_IN_ERROR', error })
export const loginSuccess = (username) => ({ type: 'LOG_IN_SUCCESS', username })

export function login (username, password) {
  return (dispatch) => {
    dispatch(loginRequest())
    return axios({
			url: '/profile',
			method: 'POST',
			data: {
				username,
				password
			}
		})
    .then((response) => {
      console.log('login request response: ', response)
      dispatch(loginSuccess(response.data.username))
    })
    .catch((error) => {
      console.log(error)
      dispatch(loginError(error))
    })
  }
}