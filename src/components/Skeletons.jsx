import React from "react";
import { Skeleton, Card } from "antd";

const Skeletons = ({ limit = 4 }) => {
    return (
        <div className="container mx-auto px-6 grid grid-cols-4 gap-4 mb-4">
            {new Array(limit).fill().map((_, inx) => (
                <Card key={inx}>
                    <div className="w-full h-[162px] bg-[#F0F0F0] mb-2 rounded-lg"></div>
                    <Skeleton />
                </Card>
            ))}
        </div>
    );
};

export default Skeletons;
