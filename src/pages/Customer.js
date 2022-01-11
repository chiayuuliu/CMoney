import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Pagination from '../components/Pagination';
import Spinner from '../components/Spinner'


const Admin = (props) => {
    
    // spinner 開關 
    let [ loading, setLoading] = useState(false)


    // useEffect(() => {
    //   // spinner 設定
    //   setLoading(true)
    //   setFilterData(userData)
    //   setTimeout(() => {
    //     setLoading(false)
    //   }, 2000)

    // }, [userData]);

    

    // 頁數大於三的處理
  //   useEffect(() => {
  //     const showPage=[]
  //     if(nowPage>3 && nowPage<totalpage-1){
  //         for(let i = nowPage-2;i<=nowPage+2; i++){
  //             showPage.push(i)
  //         }
  //         setPagination(showPage)
  //     }
  //     if(nowPage<=3){
  //       if(totalpage>=5){
  //         const showPage = [1,2,3,4,5]
  //         setPagination(showPage)
  //       }else{
  //         for(let i = 1; i <=totalpage; i++){
  //           showPage.push(i)
  //           setPagination(showPage)
  //         }
  //       }
  //     }
  // }, [nowPage]);


    // const handleGender = (data,selectGender)=>{
    //   let newData = []
    //   if(!(selectGender=='All')){
    //     setFilter(true)
    //     if(selectGender=='male'){
    //       newData = data.filter((v)=>{
    //         return v.gender==selectGender
    //       })
    //     }
    //     if(selectGender=='female'){
    //       newData = data.filter((v)=>{
    //         return v.gender==selectGender
    //       })
    //     }
    //   }else{
    //     newData=[...data]
    //   }
    //   return newData
    // }

    // const handleCountry = (data,selectCountry)=>{
    //   let newData = []
    //   if(!(selectCountry=='All')){
    //     setFilter(true) 
    //     newData = data.filter((v)=>{
    //       return v.location.country==selectCountry
    //     })
    //   }else{
    //     newData=[...data]
    //   }
    //   return newData
    // }
    //  篩選完資料在處理成展示的資料
    useEffect(() => {
      let filterData=[]
      // 處理性別(從最原始資料開始處理)
      filterData = handleGender(userData,selectGender)
      // 處理國家
      filterData = handleCountry(filterData,selectCountry)
      setFilterData(filterData)
      setFilterQty(filterData.length)

    }, [selectGender,selectCountry]);

    

    useEffect(() => {
      console.log(checkedUser)
    }, [checkedUser]);
  
    return (
    <>
    <Spinner
        loading={loading}
    />
    <div class="memberwrap"
    style={{display: loading ? 'none' : 'flex' }}>
        <h2 class="title">會員列表</h2>
        {/* 篩選區 */}
        <div class="memberfilter">
            <div class="filter">
                <select name="filter" 
                  id="country"
                  value={selectCountry}
                  onChange={(e)=>{
                    console.log(e.target.value)
                    setSelectCountry(e.target.value)
                    setNowPage(1)
                  }}>
                    <option value="All">全部國家</option>
                    {countryList.map((v,i)=>{
                      return(
                        <option value={v}
                        key={i}>{v}</option>
                      )
                    })}
                </select>
                <select 
                  name="filter" 
                  id="gender"
                  value={selectGender}
                  onChange={(e)=>{
                    setSelectGender(e.target.value)
                    setNowPage(1)
                  }}>
                    <option value="All">全部性別</option>
                    <option value="male">男</option>
                    <option value="female">女</option>
                </select>
            </div>
            <div class="filterResult">
                <p style={{
                  display: filter ? 'block' : 'none'
                }}
                >篩選結果:{filterQty}人</p>
                <p>共{userData.length}人</p>
            </div>
        </div>
        <table class="table" >
            <thead>
              <tr>
                <th>自選清單</th>
                <th>照片</th>
                <th>帳號</th>
                <th>姓名</th>
                <th>性別</th>
                <th>年齡</th>
                <th>國籍</th>
                <th>電子郵件</th>
                <th>編輯</th>
              </tr>
            </thead>
            <tbody>
            {userList.map((v,i)=>{
              return(
                <tr>
                <td><input type="checkbox" 
                  onChange={(e)=>{
                    if(e.target.checked){
                      v.checked=true
                      checkUser(v)
                    }else{
                      v.checked=false
                    }
                }}/></td>
                <td><img src={v.picture.large} alt=""/></td>
                <td>{v.login.username}</td>
                <td>{v.name.first+' '+v.name.last}</td>
                <td>{v.gender}</td>
                <td>{v.dob.age}</td>
                <td>{v.location.country}</td>
                <td>{v.email}</td>
                <td><button>編輯</button></td>
              </tr>
              )
            })}
            </tbody>
          </table>
        {/* 頁數 */}
        <div class="pagewrap">
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
        </div>
    </div>
    
    </>
    );
};

export default Admin;
