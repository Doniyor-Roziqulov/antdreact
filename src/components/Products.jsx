import React from "react";
import { Card } from "antd";
import Skeletons from "./Skeletons";
import { IoStarOutline } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { PiShoppingCartLight } from "react-icons/pi";
import { PiShoppingCartFill } from "react-icons/pi";

const Products = ({ data, loading }) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const wishlist = useSelector((state) => state.wishlist);
    if (loading) {
        return <Skeletons limit={4} />;
    }
    return (
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {data?.map((product) => (
                <Card
                    key={product.id}
                    className="bg-neutral-200 relative border border-black">
                    <div>
                        <img
                            className="w-full h-32 min-[514px]:h-40 min-[590px]:h-48 md:h-40 lg:h-60 object-contain hover:scale-105 transition-all z-10"
                            src={product.images[0]}
                            alt={product.title}
                        />
                    </div>
                    <h3 className="text-base lg:text-xl font-bold whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                        {product.title}
                    </h3>
                    <p
                        className="whitespace-nowrap overflow-hidden text-ellipsis max-w-full mb-2"
                        title={product.description}>
                        {product.description}
                    </p>
                    <button
                        onClick={() =>
                            dispatch({
                                type: "TOGGLE_WISHLIST",
                                payload: product,
                            })
                        }
                        className="absolute top-5 right-5 text-2xl text-green-600 active:scale-125">
                        {wishlist?.some((item) => item.id === product.id) ? (
                            <IoIosStar />
                        ) : (
                            <IoStarOutline />
                        )}
                    </button>
                    <button
                        className="text-2xl text-blue-600 active:scale-125"
                        onClick={() =>
                            dispatch({ type: "ADD_TO_CART", payload: product })
                        }>
                        {cart?.some((item) => item.id === product.id) ? (
                            <PiShoppingCartFill />
                        ) : (
                            <PiShoppingCartLight />
                        )}
                    </button>
                </Card>
            ))}
        </div>
    );
};

export default Products;
