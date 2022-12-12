import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Member from "./Member";

const Main = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => setData(res.data));
    }, []);

    return (
        <div>
            <h1>Main Page / 회원수 : {data.length}</h1>
            {data.map((item, index) => (
                <Member key={index} item={item}></Member>
            ))}
        </div>
    );
};

export default Main;
