import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Usercard from './../components/Usercard';

const Cmoney = (props) => {
    const {userData} = props
    console.log('首頁',userData)
    return (
    <>
    <div class="wrap">
        <h2>前端開發人力仲介</h2>
        <div class="userwrap">
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
    </div>
    <div class="pagewrap">
    </div>
    </>
    );
};

export default Cmoney;
