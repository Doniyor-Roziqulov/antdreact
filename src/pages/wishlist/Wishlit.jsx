import Empty from "@/components/empty/Empty";
import Products from "@/components/Products";
import { useStateValue } from "@/context";
import React, { useEffect } from "react";

const Wishlit = () => {
    const [data, dispatch] = useStateValue();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            {data.wishlist.length ? (
                <Products data={data.wishlist} />
            ) : (
                <Empty />
            )}
        </div>
    );
};

export default Wishlit;
