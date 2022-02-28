import Login from "./components/auth/login/Login.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/auth/register/Register.js";
import Home from "./components/logged/home/Home.js";

function App() {
    return (
        <div className="bg-dark">
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                        <Route index element={<Home />} />
                        <Route path="*" element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
