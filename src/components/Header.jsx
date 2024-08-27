import { useStateValue } from "@/context";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { IoStarOutline } from "react-icons/io5";

const Header = () => {
    const [{ wishlist }, dispatch] = useStateValue();
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
                <Button
                    onClick={() => dispatch({ type: "LOGOUT" })}
                    type="primary">
                    Log out
                </Button>
            </div>
        </div>
    );
};

export default Header;
