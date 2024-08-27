import Products from "@/components/Products";
import { useFetch } from "@/hooks/useFetch";
import React, { useState } from "react";
import { Pagination } from "antd";

const Home = () => {
    const [skip, setSkip] = useState(1);
    const [limit, setLimit] = useState(4);
    const { data, loading } = useFetch(
        "/products",
        { limit, skip: (skip - 1) * limit },
        [skip, limit]
    );
    const handleChange = (current, pageSize) => {
        console.log(current, pageSize);
        setSkip(current);
        setLimit(pageSize);
    };

    return (
        <div>
            <Products current={skip} data={data?.products} loading={loading} />
            <div className="container mx-auto px-6">
                <Pagination
                    className="mb-2"
                    onChange={handleChange}
                    align="center"
                    defaultCurrent={1}
                    defaultPageSize={4}
                    total={data?.total}
                />
            </div>
        </div>
    );
};

export default Home;
