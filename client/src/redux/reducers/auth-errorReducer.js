import * as ActionTypes from "../actions/action-types.js";

const initialState = {
    isLoginFail: "",
    success: "",
    error: "",
};

const authErrorReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.LOGIN_FAIL:
            return { ...payload };

        case ActionTypes.LOGIN_SUCCESS:
            return initialState;

        case ActionTypes.LOGOUT_FAIL:
            return { ...payload };

        case ActionTypes.LOGOUT_SUCCESS:
            return state;

        case ActionTypes.REGISTER_FAIL:
            return { ...payload };

        case ActionTypes.REGISTER_SUCCESS:
            return state;

        default:
            return state;
    }
};

export default authErrorReducer;
