import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
    <>
    <nav>
        <div className="logo">
            <img src="http://localhost:3000/logo.png" alt/>
        </div>
        <div className="navlink">
            <a href="">首頁</a>
            <a href="">會員列表</a>
            <a href="">自選清單</a>
        </div>
        <button className="loginbtn">登出</button>
    </nav>
    </>
    );
};

export default Nav;
