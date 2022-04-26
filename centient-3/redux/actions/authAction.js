import {ActivityIndicator} from "react-native";


export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';

const HIDE_LOADING = 'HIDE_LOADING';
const SHOW_LOADING = <ActivityIndicator/>;


export const registerUser = authData => {
    console.log("hello");
    const {username, password} = authData;

    return async dispatch => {
        dispatch({type: SHOW_LOADING, payload: 'Signing up...'})
        try {
            const result = await fetch(`localhost:8080/api/authenticate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password
                }),
            });
            const resultData = await result.json();
            if (!resultData.error) {
                dispatch({
                    type: 'Success',
                    payload: resultData,
                });
            } else {
                dispatch({
                    type: 'Fail',
                });
                console.log("bruh")
            }
            return resultData;
        } catch (error) {
            dispatch({
                type: REGISTER_USER_FAIL,
            });
            dispatch({type: HIDE_LOADING});
        }
    }
}

export const loginUser = authData => {
    const {user, password} = authData;

    return async dispatch => {
        dispatch({type: SHOW_LOADING, payload: 'Signing in'});
        try {
            const result = await fetch(`http://10.252.178.91:8080/api/authenticate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "username": user,
                    "password": password
                }),
            });
            const resultData = await result.json();
            if (resultData.error) {
                console.log("Error");
                dispatch({
                    type: 'error'
                });
            } else {
                dispatch({
                    type: 'Sucesss',
                    payload: resultData,
                });
            }
            return resultData;
        } catch (error) {
            dispatch({
                type: 'Fail',
            });
            console.log("what")
        }
    };
};




