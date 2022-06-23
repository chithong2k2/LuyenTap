
import React from 'react';
import "./navbar.css";

function Navbar()
{
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">Book4Fun.com</span>
                <div className="navItems">
                    <button className="navButton">Đăng ký</button>
                    <button className="navButton">Đăng nhập</button>
                </div>
            </div>
        </div>
            
    );
}
export default Navbar;