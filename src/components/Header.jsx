import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoStarOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";
import { Button, Modal } from "antd";

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const cart = useSelector((state) => state.cart);
    const wishlist = useSelector((state) => state.wishlist);
    const dispatch = useDispatch();
    return (
        <div className="flex justify-between container mx-auto px-6 py-5 border-b">
            <Link className="text-2xl italic" to={"/"}>
                Home
            </Link>
            <div className="flex items-center gap-x-10">
                <Link
                    className="text-2xl text-green-600 relative"
                    to={"wishlist"}>
                    <IoStarOutline />
                    {wishlist.length >= 1 ? (
                        <sup className="block text-xs text-white font-medium rounded-full bg-[#68a086] px-[8px] py-[3px] absolute left-[15px] top-[-6px]">
                            {wishlist.length}
                        </sup>
                    ) : (
                        <sup className="hidden">{wishlist.length}</sup>
                    )}
                </Link>
                <Link className="text-2xl text-blue-600 relative" to={"cart"}>
                    <FiShoppingCart />
                    {cart.length >= 1 ? (
                        <sup className="block text-xs text-white font-medium rounded-full bg-[#68a086] px-[8px] py-[3px] absolute left-[15px] top-[-6px]">
                            {cart.length}
                        </sup>
                    ) : (
                        <sup className="hidden">{wishlist.length}</sup>
                    )}
                </Link>
                <Button danger onClick={showModal} type="primary">
                    Log out
                </Button>
                <Modal
                    className="h-[118px] overflow-hidden rounded-lg"
                    title="Log Out"
                    open={isModalOpen}>
                    <p className="text-red-600 mb-1">
                        Akountdan chiqishni xoxlaysizmi ?
                    </p>
                    <div className="flex justify-end">
                        <Button
                            className="mr-3"
                            onClick={() => setIsModalOpen(false)}>
                            Cancel
                        </Button>
                        <Button
                            className=""
                            type="primary"
                            onClick={() =>
                                dispatch({ type: "LOGOUT", payload: cart })
                            }>
                            OK
                        </Button>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default Header;
