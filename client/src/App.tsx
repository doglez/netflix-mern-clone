import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import SignIn from "./pages/auth/auth-components/SignIn";
import LandingPage from "./pages/auth/auth-components/LandingPage";
import SignUp from "./pages/auth/auth-components/SignUp";
import ForgotPassword from "./pages/auth/auth-components/ForgotPassword";
import ResetPassword from "./pages/auth/auth-components/ResetPassword";
import { useAppSelector } from "./hooks/redux-hooks";
import Browse from "./pages/browse/Browse";
import Kids from "./pages/kids/Kids";
import ProfilesManage from "./pages/profilesManage/ProfilesManage";
import HomeBrowse from "./pages/browse/browse-components/HomeBrowse";
import HomeKids from "./pages/kids/kids-components/HomeKids";

function App() {
    const token: string = useAppSelector((state) => state.authReucer.token);

    return (
        <BrowserRouter>
            <Routes>
                {!token ? (
                    <Route>
                        <Route path="/" element={<Auth />}>
                            <Route index element={<LandingPage />} />
                            <Route path="signin" element={<SignIn />} />
                            <Route path="signup">
                                <Route index element={<SignUp />} />
                                <Route path=":email" element={<SignUp />} />
                            </Route>
                            <Route
                                path="forgotpassword"
                                element={<ForgotPassword />}
                            />
                            <Route
                                path="resetpassword/:resettoken"
                                element={<ResetPassword />}
                            />
                        </Route>
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Route>
                ) : (
                    <Route>
                        <Route
                            path="/"
                            element={<Navigate to="/browse" replace />}
                        />
                        <Route path="/">
                            <Route path="browse" element={<Browse />}>
                                <Route index element={<HomeBrowse />} />
                                <Route path="genre">
                                    <Route path="83" element={<HomeBrowse />} />
                                    <Route
                                        path="34399"
                                        element={<LandingPage />}
                                    />
                                </Route>
                                <Route
                                    path="my-list"
                                    element={<LandingPage />}
                                />
                                <Route
                                    path="original-audio"
                                    element={<LandingPage />}
                                />
                            </Route>
                            <Route path="latest" element={<Browse />} />
                            <Route path="search" element={<Browse />} />
                            <Route path="Kids" element={<Kids />}>
                                <Route index element={<HomeKids />} />
                                <Route
                                    path="characters"
                                    element={<LandingPage />}
                                />
                                <Route path="genre">
                                    <Route
                                        path="2496491"
                                        element={<LandingPage />}
                                    />
                                    <Route
                                        path="2495600"
                                        element={<LandingPage />}
                                    />
                                </Route>
                                <Route
                                    path="my-list"
                                    element={<LandingPage />}
                                />
                                <Route
                                    path="original-audio"
                                    element={<LandingPage />}
                                />
                                <Route path="latest" element={<Kids />} />
                                <Route path="search" element={<Kids />} />
                            </Route>
                            <Route
                                path="profiles/manage"
                                element={<ProfilesManage />}
                            />
                        </Route>
                        <Route
                            path="*"
                            element={<Navigate to="/browse" replace />}
                        />
                    </Route>
                )}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
