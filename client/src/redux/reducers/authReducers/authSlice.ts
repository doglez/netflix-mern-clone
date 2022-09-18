import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { API_URL_SERVER } from "../../../config/Config";

interface IInitialState {
    token: string;
    error: string;
    status: string;
    data: object | string;
}

const initialState: IInitialState = {
    token: "",
    error: "",
    status: "",
    data: "",
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

            return { token, error: "", status: "", data: "" };
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
            state.error = "";
            state.status = "";
            state.data = "";
        },
        signUpFail: (state, action) => {
            state.token = "";
            state.error = action.payload.error;
            state.status = "";
            state.data = "";
        },
    },
});

export const SignUpCrt =
    (data: any): any =>
    async (dispatch: any) => {
        await axios
            .post(`${API_URL_SERVER}/auth/signup`, data)
            .then((r) => dispatch(signUpSuccess(r.data)))
            .catch((e) => dispatch(signUpFail(e.response.data)));
    };

export const { signUpSuccess, signUpFail } = authSlice.actions;

export default authSlice.reducer;
