import React from 'react';
import Navbar from "../Components/Navbar"
const DefaultNav = (props) => {
    return (
        <div className="container">
            <Navbar />
            {props.children}
        </div>
    );
}

export default DefaultNav;