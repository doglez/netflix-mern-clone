import React from "react";
import SignUp from "./pages/auth/SignUp";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./pages/auth/SignIn";
import Home from "./pages/home/Home";

function App() {
    const token: string = "";

    return (
        <BrowserRouter>
            <Routes>
                {!token ? (
                    <Route>
                        <Route
                            path="/"
                            element={<Navigate to="/signup" replace />}
                        />
                        <Route path="/">
                            <Route path="signup" element={<SignUp />} />
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
