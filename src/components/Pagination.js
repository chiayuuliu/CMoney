import React,{ useState, useEffect }  from 'react';
import { Link } from 'react-router-dom'

const Pagination = (props) => {
    // 頁數陣列、設定頁數狀態
    const {pagination,setPagination,nowPage, setNowPage, totalpage} = props
   
    useEffect(() => {
        // 第一次進來生成頁碼陣列
        const showPage=[]
        if(totalpage>5 ){
            for(let i = nowPage; i <=nowPage+4; i++){
                showPage.push(i)
            }
            // console.log(showPage)
            setPagination(showPage)
        }else{
            for(let i = 1; i <=totalpage; i++){
                showPage.push(i)
            }
            // console.log(showPage)
            setPagination(showPage)
        }       
    }, []);
    useEffect(() => {
        if(nowPage>3 && nowPage<totalpage-1){
            const showPage=[]
            for(let i = nowPage-2;i<=nowPage+2; i++){
                showPage.push(i)
            }
            setPagination(showPage)
        }
        if(nowPage<=3){
            const showPage = [1,2,3,4,5]
            setPagination(showPage)
        }
    }, [nowPage]);
    
    // console.log(nowPage,pagination)

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
                }}>{v}</div>
                )})
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
