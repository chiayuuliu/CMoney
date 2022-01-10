import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Usercard from './../components/Usercard';
import Pagination from './../components/Pagination';
import Userdetail from './../components/Userdetail';

const Cmoney = (props) => {
    // 全部user、總頁數從頂層來
    const {userData, totalpage,detailInfo,setDetailInfo} = props
    // 儲存全部的頁數陣列
    // const [PageAr, setPageAr] = useState([])
    // 呈現的頁數
    const [ pagination, setPagination] = useState([])
    // 顯示的會員資料
    const [ displayUser, setDisplayUser] = useState([])
    // 設定初始頁數第一頁
    const [ nowPage, setNowPage] = useState(1)
    // 細節頁開關，預設是不顯示
    const [ detailDisplay, setDetailDisplay] = useState(false)

    // 判斷是否登入
    const [ login, setLogin] = useState('登入');

    // 關閉細節頁
    window.addEventListener('keydown',(e)=>{
        if(e.key=='Escape'){
            setDetailDisplay(false)
        }
    })

    function setCookie(login) {
        let now = new Date() // 現在時間
        let time = 60000 //有效時間一分鐘
        let expTime = now.getTime()+ time // 過期時間現在時間+ 一分鐘
        let expDate = new Date(expTime)

        // console.log('現在時間',now)
        // console.log('現在時間+有效時間(毫秒)',expTime)
        // console.log('有效期限日期',new Date(expDate));
        document.cookie = `login=true; max-age= 6000`
        setTimeout(() => {
            console.log('7秒後cookie',document.cookie)
        }, 7000);
        setTimeout(() => {
            delCookie()
            console.log('6秒後cookie',document.cookie)
        }, 6000);
    }
    function delCookie() {
        console.log('del');
        document.cookie = `${login}=''; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }
    // setCookie()
    delCookie()
    console.log('cookie',document.cookie);
    

    // 目前頁數有變化的時候，去修改顯示的資料&調整頁碼的呈現
    useEffect(() => {
        let newData =userData.slice((nowPage-1)*20,(nowPage*20))
        setDisplayUser(newData)
        setDetailInfo(userData[0])
    }, [nowPage,userData]);

    return (
    <>
    <div className="wrap">
        <h2>前端開發人力仲介</h2>
        <div className="userwrap">
        {displayUser.map((v,i)=>{
            return(
            <div class="user"
                onClick={()=>{
                    // 設定細節頁資訊
                    setDetailInfo(v)
                    setDetailDisplay(true)
                }}>
            <Usercard
                avatar={v.picture.large}
                name={v.name.first+' '+v.name.last}
                country={v.location.country}
                city={v.location.city}
                gender={v.gender}
                
            />
            </div>)
        })}
        </div>
        <div className="pagewrap"
        >
            <Pagination
                pagination={pagination}
                setPagination={setPagination}
                nowPage={nowPage}
                setNowPage={setNowPage}
                totalpage={totalpage}
                
            />
        </div>
    </div>
    {/* 細節頁 */}
    <Userdetail
        detailInfo={detailInfo}
        detailDisplay={detailDisplay}
        setDetailDisplay={setDetailDisplay}
    />    
    </>
    );
};

export default Cmoney;
