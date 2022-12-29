import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { API_URL_SERVER } from "../../../config/Config";

interface IInitialState {
    token: string | null;
    error: string | null;
    status: string | null;
    data: object | string | null;
}

const initialState: IInitialState = {
    token: null,
    error: null,
    status: null,
    data: null,
};

interface IDocodeToken {
    id: string;
    iat: number;
    exp: number;
}

const getInitialState = () => {
    const auth: string = String(
        localStorage.getItem("RIXefsVzPCZXUxVlHaxuyOqZ")
    );

    try {
        const token = JSON.parse(auth);
        const decode: IDocodeToken = jwtDecode(token);
        const expireToken = decode.exp;

        if (new Date(expireToken * 1000) > new Date()) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            axios.get(`${API_URL_SERVER}/auth/valtoken`).catch((e) => {
                localStorage.removeItem("RIXefsVzPCZXUxVlHaxuyOqZ");
                window.location.reload();
                return initialState;
            });

            return { token, error: null, status: null, data: null };
        }

        localStorage.removeItem("RIXefsVzPCZXUxVlHaxuyOqZ");
        return initialState;
    } catch (error) {
        localStorage.removeItem("RIXefsVzPCZXUxVlHaxuyOqZ");
        return initialState;
    }
};

const authSlice = createSlice({
    name: "authReucer",
    initialState: getInitialState(),
    reducers: {
        signUpSuccess: (state, action) => {
            // The token is stored in local storage under the name RIXefsVzPCZXUxVlHaxuyOqZ
            localStorage.setItem(
                "RIXefsVzPCZXUxVlHaxuyOqZ",
                JSON.stringify(action.payload.token)
            );

            axios.defaults.headers.post[
                "Authorization"
            ] = `Bearer ${action.payload.token}`;

            state.token = action.payload.token;
            state.error = null;
            state.status = null;
            state.data = null;
        },
        signUpFail: (state, action) => {
            state.token = null;
            state.error = action.payload.error;
            state.status = null;
            state.data = null;
        },
        signInSuccess: (state, action) => {
            // The token is stored in local storage under the name RIXefsVzPCZXUxVlHaxuyOqZ
            localStorage.setItem(
                "RIXefsVzPCZXUxVlHaxuyOqZ",
                JSON.stringify(action.payload.token)
            );

            axios.defaults.headers.post[
                "Authorization"
            ] = `Bearer ${action.payload.token}`;

            state.token = action.payload.token;
            state.error = null;
            state.status = null;
            state.data = null;
        },
        signInFail: (state, action) => {
            state.token = null;
            state.error = action.payload.error;
            state.status = null;
            state.data = null;
        },
        signOutSuccess: (state, action) => {
            state.token = null;
            state.error = null;
            state.status = null;
            state.data = null;
        },
        signOutFail: (state, action) => {
            state.token = null;
            state.error = action.payload.error;
            state.status = null;
            state.data = null;
        },
        forgotPasswordSuccess: (state, action) => {
            state.token = null;
            state.error = null;
            state.status = null;
            state.data = action.payload.data;
        },
        forgotPasswordFail: (state, action) => {
            state.token = null;
            state.error = action.payload.error;
            state.status = null;
            state.data = null;
        },
        resetPasswordSuccess: (state, action) => {
            // The token is stored in local storage under the name RIXefsVzPCZXUxVlHaxuyOqZ
            localStorage.setItem(
                "RIXefsVzPCZXUxVlHaxuyOqZ",
                JSON.stringify(action.payload.token)
            );

            axios.defaults.headers.post[
                "Authorization"
            ] = `Bearer ${action.payload.token}`;

            state.token = action.payload.token;
            state.error = null;
            state.status = null;
            state.data = action.payload.data;
        },
        resetPasswordFail: (state, action) => {
            state.token = null;
            state.error = action.payload.error;
            state.status = null;
            state.data = null;
        },
    },
});

export const SignUpCrt =
    (data: any): any =>
    async (dispatch: any) => {
        await axios
            .post(`${API_URL_SERVER}/auth/signup`, data)
            .then((r) => {
                dispatch(signUpSuccess(r.data));
                window.location.reload();
            })
            .catch((e) => dispatch(signUpFail(e.response.data)));
    };

export const SignInCrt =
    (data: any): any =>
    async (dispatch: any) => {
        await axios
            .post(`${API_URL_SERVER}/auth/signin`, data)
            .then((r) => {
                dispatch(signInSuccess(r.data));
                window.location.reload();
            })
            .catch((e) => dispatch(signInFail(e.response.data)));
    };

export const SignOutCrt = (): any => async (dispatch: any) => {
    await axios
        .get(`${API_URL_SERVER}/auth/signout`)
        .then((r) => {
            dispatch(signOutSuccess(r.data));
            localStorage.removeItem("RIXefsVzPCZXUxVlHaxuyOqZ");
        })
        .catch((e) => {
            dispatch(signOutFail(e.response.data));
            localStorage.removeItem("RIXefsVzPCZXUxVlHaxuyOqZ");
        });
};

export const forgotPasswordCrt =
    (data: any): any =>
    async (dispatch: any) => {
        await axios
            .post(`${API_URL_SERVER}/auth/forgotpassword`, data)
            .then((r) => {
                dispatch(forgotPasswordSuccess(r.data));
            })
            .catch((e) => dispatch(forgotPasswordFail(e.response.data)));
    };

export const resetPasswordCrt =
    (data: any): any =>
    async (dispatch: any) => {
        await axios
            .put(`${API_URL_SERVER}/auth/resetpassword/${data.resettoken}`, {
                password: data.password,
                passwordConfirm: data.passwordConfirm,
            })
            .then((r) => {
                dispatch(resetPasswordSuccess(r.data));
            })
            .catch((e) => dispatch(resetPasswordFail(e.response.data)));
    };

export const {
    signUpSuccess,
    signUpFail,
    signInSuccess,
    signInFail,
    signOutSuccess,
    signOutFail,
    forgotPasswordSuccess,
    forgotPasswordFail,
    resetPasswordSuccess,
    resetPasswordFail,
} = authSlice.actions;

export default authSlice.reducer;
