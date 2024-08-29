import Empty from "@/components/empty/Empty";
import Products from "@/components/Products";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Wishlit = () => {
    const data = useSelector((state) => state.wishlist);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return <div>{data.length ? <Products data={data} /> : <Empty />}</div>;
};

export default Wishlit;
