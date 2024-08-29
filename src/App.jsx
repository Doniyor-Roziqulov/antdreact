import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { Watermark } from "antd";
import Auth from "./pages/auth/Auth";
import Wishlit from "./pages/wishlist/Wishlit";
import Layout from "./components/layout/Layout";
import Cart from "./pages/cart/Cart";

function App() {
    return (
        <>
            <Watermark className="min-h-screen" content="Redux">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Layout />}>
                        <Route path="" element={<Auth />}>
                            <Route path="" element={<Home />} />
                            <Route path="wishlist" element={<Wishlit />} />
                            <Route path="cart" element={<Cart />} />
                        </Route>
                    </Route>
                </Routes>
            </Watermark>
        </>
    );
}

export default App;
