import React from "react";
import Navbar from "./Navbar/Navbar";

const Layout = props => (
    <>
     <Navbar />
     {props.children}
    </>
)

export default Layout;