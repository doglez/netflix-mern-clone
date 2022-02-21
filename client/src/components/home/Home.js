import axios from "axios";
import React from "react";
import jwt_decode from "jwt-decode";
import config from "../../config/config.js";

axios
    .post(`${config.AUTH_URL}/login`, {
        email: "admin@gmail.com",
        password: "password",
    })
    .then((r) => {
        console.log(r.data);
        const token = r.data.token;
        const decode = jwt_decode(token);
        console.log(decode.exp);
    })
    .catch((e) => console.log(e));

const Home = () => {
    return <div>Home</div>;
};

export default Home;
