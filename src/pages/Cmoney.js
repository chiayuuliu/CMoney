import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Usercard from './../components/Usercard';
import Pagination from './../components/Pagination';

const Cmoney = (props) => {
    const {userData, totalpage} = props
    // 儲存全部的頁數陣列
    const [PageAr, setPageAr] = useState([])
    // 呈現的頁數
    const [ pagination, setPagination] = useState([])
    // 顯示的會員資料
    const [ displayUser, setDisplayUser] = useState([])
    // 設定初始頁數第一頁
    const [ nowPage, setNowPage] = useState(1)
    
    // 生成頁數陣列(只做一次), 總頁數在上層被更新後再去生成頁碼
    useEffect(() => {
        // 第一次進來生成頁碼陣列
        for (let i = 1 ; i<=totalpage ; i++){
            PageAr.push(i)
        }
        setPageAr(PageAr)
        // 如果大於五頁做頁碼呈現控制
        if(PageAr.length>5){
            // 取五頁就好
            let showPage = PageAr.slice(nowPage-1, nowPage+4)
            // console.log(showPage)
            setPagination(showPage)
        }else{
            setPagination(PageAr)
        }
    }, [totalpage]);
    // console.log(PageAr)

    // 目前頁數有變化的時候，去修改顯示的資料&調整頁碼的呈現
    useEffect(() => {
        // 不同頁數的呈現資料
        let newData =userData.slice((nowPage-1)*20,(nowPage*20))
        setDisplayUser(newData)

        // 如果現在的頁數>3的時候，控制頁數
        if(nowPage>3 && nowPage<totalpage-1){
            console.log('頁碼>3')
            const showPage = PageAr.slice((nowPage-3),(nowPage+2))
            setPagination(showPage)
        }else{
            
        }


    }, [nowPage,userData]);

    return (
    <>
    <div className="wrap">
        <h2>前端開發人力仲介</h2>
        <div className="userwrap">
        {displayUser.map((v,i)=>{
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
            <Pagination
                pagination={pagination}
                nowPage={nowPage}
                setNowPage={setNowPage}
            />
        </div>
    </div>
    
    </>
    );
};

export default Cmoney;
