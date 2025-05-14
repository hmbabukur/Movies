import React from "react";
import '../App.css';

function Header(){
    return(
        <div className="header">
            <div className="logo">
                <h1>MovieCity</h1>
            </div>
            <div className="navigation">
                <ul>
                    <li><a href="#">Movies</a></li>
                    <li><a href="#">Categories</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="btn">
                <button type="button">Login</button>
            </div>
        </div>
    );
}
export default Header;