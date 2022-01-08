import React,{ useState, useEffect }  from 'react';
import { Link } from 'react-router-dom'

const Userdetail = (props) => {
    const {detailInfo} = props
    const [name, setName] = useState('');
    // console.log('detail',detailInfo.name)
    // 判斷性別
    useEffect(() => {
        // console.log(detailInfo.name.first)
        // console.log('detailpage',detailInfo)
        // setName(detailInfo.name.first)
    }, [detailInfo]);
    return (
    <>
    <div class="dt-back">
        <div class="dt-wrap">
            {/* 上半部資訊 */}
            <div class="dt-card">
                <div class="dt-avatar">
                    {/* <img src={detailInfo.picture.large} alt=""/> */}
                </div>
                <div class="dt-info">
                {/* {console.log('name',name)} */}
                    {/* <p>{name}</p> */}

                    {/* <p>{detailInfo.name.first+ ' ' + detailInfo.name.last}</p> */}
                    {/* <p>{detailInfo.gender}</p>
                    <p>{detailInfo.email}</p>
                    <p>{detailInfo.phone}</p> */}
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
