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

    // 關閉細節頁
    window.addEventListener('keydown',(e)=>{
        if(e.key=='Escape'){
            setDetailDisplay(false)
        }
    })
    // useEffect(() => {
    //     // 第一次進來生成頁碼陣列
    //     const showPage=[]
    //     if(totalpage>5 ){
    //         for(let i = nowPage; i <=nowPage+4; i++){
    //             showPage.push(i)
    //         }
    //         console.log(showPage)
    //         setPagination(showPage)
    //     }else{
    //         for(let i = 1; i <=5; i++){
    //             showPage.push(i)
    //         }
    //         console.log(showPage)
    //         setPagination(showPage)
    //     }       
    // }, []);

    // 目前頁數有變化的時候，去修改顯示的資料&調整頁碼的呈現
    useEffect(() => {
        let newData =userData.slice((nowPage-1)*20,(nowPage*20))
        setDisplayUser(newData)

        // if(nowPage>3 && nowPage<totalpage-1){
        //     const showPage=[]
        //     for(let i = nowPage-2;i<=nowPage+2; i++){
        //         showPage.push(i)
        //     }
        //     setPagination(showPage)
        // }
        // if(nowPage<=3){
        //     const showPage = [1,2,3,4,5]
        //     setPagination(showPage)
        // }
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
