import Cartinner from "@/components/cartinner/Cartinner";
import Empty from "@/components/empty/Empty";
import { data } from "autoprefixer";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return <>{cart.length ? <Cartinner data={cart} /> : <Empty />}</>;
};

export default Cart;
