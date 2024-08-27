import React, { memo } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";

const Layout = () => {
    return (
        <>
            <Header />
            <main className="pt-4">
                <Outlet />
            </main>
        </>
    );
};

export default memo(Layout);
