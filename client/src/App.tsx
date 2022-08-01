import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import SignIn from "./pages/auth/auth-components/SignIn";
import SignUp from "./pages/auth/auth-components/SignUp";
import Home from "./pages/home/Home";

function App() {
    const token: string = "";

    return (
        <BrowserRouter>
            <Routes>
                {!token ? (
                    <Route>
                        <Route path="/" element={<Auth />}>
                            <Route index element={<SignUp />} />
                            <Route path="signin" element={<SignIn />} />
                        </Route>
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Route>
                ) : (
                    <Route>
                        <Route
                            path="/"
                            element={<Navigate to="/home" replace />}
                        />
                        <Route path="/">
                            <Route path="home" element={<Home />} />
                        </Route>
                        <Route
                            path="*"
                            element={<Navigate to="/home" replace />}
                        />
                    </Route>
                )}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
