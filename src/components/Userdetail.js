import React,{ useState, useEffect }  from 'react';
import { Link } from 'react-router-dom'

const Userdetail = (props) => {
    const {detailInfo} = props

    // 判斷性別
    useEffect(() => {
        console.log(detailInfo)
        // console.log({detailInfo.picture.medium})
    }, [detailInfo]);
    return (
    <>
    <div class="dt-back">
        <div class="dt-wrap">
            {/* 上半部資訊 */}
            <div class="dt-card">
                <div class="dt-avatar">
                    <img src='' alt=""/>
                </div>
                <div class="dt-info">
                    <p>{detailInfo.name.first+ ' ' + detailInfo.name.last}</p>
                    <p>{detailInfo.gender}</p>
                    <p>{detailInfo.email}</p>
                    <p>{detailInfo.phone}</p>
                    <p>dis</p>
                </div>
            </div>
            <div class="dt-map"></div>
        </div>
    </div>
    </>
    );
};

export default Userdetail;
