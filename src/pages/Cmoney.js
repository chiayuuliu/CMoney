import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Usercard from './../components/Usercard';
import Pagination from './../components/Pagination';
import Userdetail from './../components/Userdetail';
import Spinner from './../components/Spinner'

const Cmoney = (props) => {
    // 全部user、總頁數從頂層來
    const {userData, totalpage,detailInfo,setDetailInfo,login} = props
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


    // 一開始spinner 設定關閉
    let [ loading, setLoading] = useState(false)
    // 關閉細節頁
    window.addEventListener('keydown',(e)=>{
        if(e.key=='Escape'){
            setDetailDisplay(false)
        }
    })

    // 設定cookie
    function setCookie() {
        let now = new Date() // 現在時間
        let time = 60000 //有效時間一分鐘
        let expTime = now.getTime()+ time // 過期時間現在時間+ 一分鐘
        let expDate = new Date(expTime)
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
        document.cookie = `login=''; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }
    // setCookie()
    // delCookie()
    // console.log('cookie',document.cookie);
    
    // 目前頁數有變化的時候，去修改顯示的資料&調整頁碼的呈現
    useEffect(() => {
        
        let newData =userData.slice((nowPage-1)*20,(nowPage*20))
        setDisplayUser(newData)
        setDetailInfo(userData[0])
        
    }, [nowPage,userData]);

    // 只下第一次spinner
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
                setLoading(false)
            }, 2000)
    }, []);

    return (
    <>
    <Spinner loading={loading}/>
    
    <div className="wrap"
    style={{display: loading ? 'none' : 'flex' }}>
        <h2>前端開發人力仲介</h2>
        <div className="userwrap">
        {displayUser.map((v,i)=>{
            return(
            <div class="user"
                onClick={()=>{
                    if(login){
                    // 設定細節頁資訊
                    setDetailInfo(v)
                    setDetailDisplay(true)
                    }                   
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
