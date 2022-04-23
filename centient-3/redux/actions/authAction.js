import {ActivityIndicator} from "react-native";


export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';

const HIDE_LOADING = 'HIDE_LOADING';
const SHOW_LOADING = <ActivityIndicator/>;


export const registerUser = authData => {
    const {email, user, password} = authData;


    return async dispatch => {
        dispatch({type: SHOW_LOADING, payload: 'Signing up...'})
        try {
            const result = await fetch(`http://10.252.178.91:8080/api/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    user,
                    password,
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
    const {email, password} = authData;

    return async dispatch => {
        dispatch({type: SHOW_LOADING, payload: 'Signing in'});
        try {
            const result = await fetch(`http://10.252.178.91:8080/api/auth/signin`, {
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

            if (resultData.error) {
                dispatch({
                    type: 'error'
                });
                console.log("error")
            } else {
                dispatch({
                    type: 'Sucess',
                    payload: resultData,
                });
            }
            return resultData;
        } catch (error) {
            dispatch({
                type: 'Fail',
            });
        }
    };
};




