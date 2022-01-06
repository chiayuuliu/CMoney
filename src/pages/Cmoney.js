import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Usercard from './../components/Usercard';
import Pagination from './../components/Pagination';

const Cmoney = (props) => {
    const {userData} = props
    // 不用篩選，只要呈現依照頁數呈現資料
    
    // console.log('首頁',userData)

    return (
    <>
    <div className="wrap">
        <h2>前端開發人力仲介</h2>
        <div className="userwrap">
        {userData.map((v,i)=>{
            return(
            <Usercard
                avatar={v.picture.large}
                name={v.name.first+' '+v.name.last}
                country={v.location.country}
                city={v.location.city}
                gender={v.gender}
            />)
        })}
        </div>
        <div className="pagewrap">
            <Pagination/>
        </div>
    </div>
    
    </>
    );
};

export default Cmoney;
