import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { Watermark } from "antd";
import Auth from "./pages/auth/Auth";
import Wishlit from "./pages/wishlist/Wishlit";
import Layout from "./components/layout/Layout";

function App() {
    return (
        <>
            <Watermark className="min-h-screen" content="Doniyor Ro'ziqulov">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Layout />}>
                        <Route path="" element={<Auth />}>
                            <Route path="" element={<Home />} />
                            <Route path="wishlist" element={<Wishlit />} />
                        </Route>
                    </Route>
                </Routes>
            </Watermark>
        </>
    );
}

export default App;
