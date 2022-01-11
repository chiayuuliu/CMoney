import React,{ useState, useEffect }  from 'react';
import { Link } from 'react-router-dom'

const Userdetail = (props) => {
    const {detailInfo, detailDisplay, setDetailDisplay} = props

    return (        
    <>
    {/* 沒資料的話回傳空字串 */}
    {(!detailInfo || !detailInfo.name) ? '' : 
    (<div class="dt-back"
        style={{display:detailDisplay ? 'flex' : 'none'}}
        onClick={(e)=>{
            setDetailDisplay(false)
        }}>
        <div class="dt-wrap">
            <div class="dt-card">
                <div class="dt-avatar">
                    <img src={detailInfo.picture.large} alt=""/>
                </div>
                <div class="dt-info">
                    <p>{detailInfo.name.first+' '+detailInfo.name.last}</p>
                    <p>{detailInfo.gender}</p>
                    <p>{detailInfo.email}</p>
                    <p>{detailInfo.phone}</p>
                </div>
            </div>
            <div class="dt-map"></div>
        </div>
    </div>)}
    </>
    );
};

export default Userdetail;
