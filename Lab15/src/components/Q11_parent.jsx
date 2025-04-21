import React from "react";
import Child from "./Q11_child";
export default function Q11() {
    const message = "Hello from Parent Component!";
    return <Child msg={message} />;
}
