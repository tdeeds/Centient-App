import {API_HOST} from'../../utils/constants'



export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';

const HIDE_LOADING = 'HIDE_LOADING';
const SHOW_LOADING = 'SHOW_LOADING';
const API = API_HOST;


export const registerUser = authData => {
    const {email, password} = authData;

    return async dispatch => {
        dispatch({type: SHOW_LOADING, payload: 'Signing up...'})
        try {
            const result = await fetch(`${API}/api/v1/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });
            const resultData = await result.json();
            if (!resultData.error) {
                dispatch({
                    type: REGISTER_USER_SUCCESS,
                    payload: resultData,
                });
            } else {
                dispatch({
                    type: REGISTER_USER_FAIL,
                });
            }
            dispatch({type: HIDE_LOADING});

            return resultData;
        } catch (error) {
            dispatch({
                type: REGISTER_USER_FAIL,
            });
            dispatch({type: HIDE_LOADING});
        }
    }
}


