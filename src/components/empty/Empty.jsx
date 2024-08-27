import React from "react";
import { Link } from "react-router-dom";

const Empty = () => {
    return (
        <div className="flex flex-col items-center">
            <img
                className="w-[330px] h-[330px] object-contain"
                src="https://cdn.dribbble.com/userupload/9027784/file/original-1a589755fb362d4d41485be3322fee16.jpg?resize=400x300&vertical=center"
                alt="img"
            />
            <Link className="py-2 px-4 rounded-md bg-[#DEF9EC]" to={"/"}>
                Go home
            </Link>
        </div>
    );
};

export default Empty;
