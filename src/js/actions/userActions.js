import axios from 'axios';

// export function login(username, password) {
// 	return (dispatch) => {
// 		axios({
// 			url: 'http://localhost:3000/profile',
// 			method: 'post',
// 			data: {
// 				username,
// 				password
// 			}
// 		}).then((res) => {
// 			console.log('res from LOGIN', res)
// 			dispatch({
// 				type: 'LOG_IN'
// 			});
// 		});
// 	};
// }

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
      console.log(response)
      dispatch(loginSuccess(response.username))
    })
    .catch((error) => {
      console.log(error)
      dispatch(loginError(error))
    })
  }
}