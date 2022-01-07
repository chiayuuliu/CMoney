import React,{ useState, useEffect }  from 'react';
import { Link } from 'react-router-dom'

const Pagination = (props) => {
    // 頁數陣列、設定頁數狀態
    const {pagination, setNowPage} = props
        
    return (
    <>
    {/* 前一頁 */}
        <div class="pre-page">
            <i class="fas fa-chevron-left"></i>
        </div>
        {pagination.map((v,i)=>{
            return(
                <div class="page"
                onClick={()=>{
                    setNowPage(v)
                }}>{v}</div>
            )
        })}
        
    {/* 後一頁 */}
        <div class="next-page">
            <i class="fas fa-chevron-right"></i>
        </div>
    </>
    );
};

export default Pagination;
