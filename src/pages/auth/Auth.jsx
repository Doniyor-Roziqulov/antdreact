import { useStateValue } from "@/context";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Auth = () => {
    let [{ token }] = useStateValue();
    return token ? <Outlet /> : <Navigate replace to={"/login"} />;
};

export default Auth;
