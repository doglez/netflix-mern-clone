import axios from "axios";
import config from "../../config/config.js";
import * as ActionTypes from "./action-types.js";

export const LoginCrt = (loginData) => (dispatch) =>
    axios
        .post(`${config.AUTH_URL}/login`, loginData)
        .then((r) => {
            window.location.reload();
            dispatch({
                type: ActionTypes.LOGIN_SUCCESS,
                payload: { isLoggedIn: true, ...r.data },
            });
        })
        .catch((e) => {
            dispatch({
                type: ActionTypes.LOGIN_FAIL,
                payload: e.response.data,
            });
        });

export const LogoutCrt = (history) => (dispatch) =>
    axios
        .get(`${config.AUTH_URL}/logout`)
        .then((r) => {
            dispatch({
                type: ActionTypes.LOGOUT_SUCCESS,
                payload: r.data,
            });
        })
        .catch((e) => {
            dispatch({
                type: ActionTypes.LOGOUT_FAIL,
                payload: e.response.data,
            });
            history.push("/");
        });

export const RegisterCrt = (registerData) => (dispatch) =>
    axios
        .post(`${config.AUTH_URL}/register`, registerData)
        .then((r) => {
            window.location.reload();
            dispatch({
                type: ActionTypes.REGISTER_SUCCESS,
                payload: { isLoggedIn: true, ...r.data },
            });
        })
        .catch((e) => {
            dispatch({
                type: ActionTypes.REGISTER_FAIL,
                payload: e.response.data,
            });
        });
