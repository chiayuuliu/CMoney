import React,{ useState, useEffect }  from 'react';
import { Link } from 'react-router-dom'

const Pagination = (props) => {
    // 頁數陣列、設定頁數狀態
    const {pagination,nowPage, setNowPage, totalpage} = props
        
    
    return (
    <>
    {/* 前一頁 */}
        <div class="pre-page"
        onClick={()=>{
            if(nowPage>1){
                setNowPage(nowPage-1)
            }}}>
            <i className={
                nowPage==1 ? 'fas fa-chevron-left pageDisable' : 'fas fa-chevron-left'
            }></i>

            {/* 頁數 */}
        </div>
        {pagination.map((v,i)=>{
            return(
                <div className={nowPage==v ? 'page nowpage' : 'page'}
                onClick={()=>{
                    setNowPage(v)
                }}>{v}</div>)})
            }
        
    {/* 後一頁 */}
        <div class="next-page" 
        onClick={(e)=>{
            if(nowPage<totalpage){
                setNowPage(nowPage+1)
            }
        }}>
            <i className={
                nowPage==totalpage ? 'fas fa-chevron-right pageDisable' : 'fas fa-chevron-right'
            }></i>
        </div>
    </>
    );
};

export default Pagination;
