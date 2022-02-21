import axios from "axios";
import jwtDecode from "jwt-decode";
import * as ActionTypes from "../actions/action-types.js";

const initialState = {
    isLoggedIn: false,
    success: "",
    token: "",
};

const getInitialState = () => {
    const auth = localStorage.getItem("auth");
    try {
        const authObject = JSON.parse(auth);
        const { token } = authObject;
        const decode = jwtDecode(token);
        const expireToken = decode.exp;

        if (new Date(expireToken * 1000) > new Date()) {
            axios.defaults.headers.common["Authorization"] = token;
            return authObject;
        }
        return initialState;
    } catch (error) {
        return initialState;
    }
};

const authState = getInitialState();

const authReducer = (state = authState, { type, payload }) => {
    switch (type) {
        case ActionTypes.LOGIN_SUCCESS:
            localStorage.setItem("auth", JSON.stringify(payload));
            axios.defaults.headers.common["Authorization"] = payload.type;
            return payload;

        case ActionTypes.LOGIN_FAIL:
            localStorage.removeItem("auth");
            return initialState;

        case ActionTypes.LOGOUT_SUCCESS:
            localStorage.removeItem("auth");
            return initialState;

        case ActionTypes.LOGOUT_FAIL:
            localStorage.removeItem("auth");
            return initialState;

        default:
            return state;
    }
};

export default authReducer;
