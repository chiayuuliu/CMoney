import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Editform from './../components/Editform';
import Spinner from './../components/Spinner'


const Admin = (props) => {
    const {userData, countryList,checkedUser, setCheckedUser} = props
    const [ nowPage, setNowPage] = useState(1)
    // 展示的資料
    const [ userList, setuserList] = useState([]);
    // 打勾的數量
    // const [ checkedQty, setcheckedQty] = useState();
    const [ totalpage, setTotalpage] = useState(0)
    const [ selectCountry, setSelectCountry] = useState('All')
    const [ selectGender, setSelectGender] = useState('All')
    // 如果只有一頁，不顯示前後頁icon
    const [ onepage, setOnepage] =useState(false)
    // 篩選資料筆數結果
    const [ filterQty, setFilterQty] = useState(0);
    // 篩選結果顯示
    const [filter, setFilter] = useState(false);
    // 篩選後的資料
    const [ filterData, setFilterData] = useState([])
    const [pagination, setPagination] = useState([])
    // spinner 開關 
    let [ loading, setLoading] = useState(false)
    // 編輯頁資料
    const [ editInfo, setEditInfo]= useState({})
    const [ editDisplay, setEditDisplay]= useState(false)


    window.addEventListener('keydown',(e)=>{
      if(e.key=='Escape'){
        setEditDisplay(false)
      }
  })

    useEffect(() => {
      // spinner 設定
      setLoading(true)
      setFilterData(userData)
      setTimeout(() => {
        setLoading(false)
      }, 2000)

    }, [userData]);

    useEffect(() => {
      handleDisplayList(nowPage,filterData)

    }, [filterData,nowPage]);

    // 處理陳列的資料，頁數變動、篩選、都要從新設定
    const handleDisplayList =(nowPage, data)=>{
      setTotalpage(Math.ceil(data.length/10))
      // 展示的資料
      let displayData = data.slice((nowPage-1)*10,(nowPage*10))
      setuserList(displayData)
    }

    // 生成總頁數
    useEffect(() => {
      let showPage=[]
      if(totalpage>5){
        for(let i = nowPage; i <=nowPage+4; i++){
          showPage.push(i)
        }
      }else{
        for(let i = 1; i <=totalpage; i++){
          showPage.push(i)
        }
      }
      setPagination(showPage)

    }, [totalpage]);

    // 頁數大於三的處理
    useEffect(() => {
      const showPage=[]
      if(nowPage>3 && nowPage<totalpage-1){
          for(let i = nowPage-2;i<=nowPage+2; i++){
              showPage.push(i)
          }
          setPagination(showPage)
      }
      if(nowPage<=3){
        if(totalpage>=5){
          const showPage = [1,2,3,4,5]
          setPagination(showPage)
        }else{
          for(let i = 1; i <=totalpage; i++){
            showPage.push(i)
            setPagination(showPage)
          }
        }
      }
  }, [nowPage]);

    // 性別篩選
    const handleGender = (data,selectGender)=>{
      let newData = []
      if(!(selectGender=='All')){
        // 如果有篩選條件，數量結果設顯示
        setFilter(true)
        if(selectGender=='male'){
          newData = data.filter((v)=>{
            return v.gender==selectGender
          })
        }
        if(selectGender=='female'){
          newData = data.filter((v)=>{
            return v.gender==selectGender
          })
        }
      }else{
        newData=[...data]
      }
      return newData
    }
    //  處理國家篩選
    const handleCountry = (data,selectCountry)=>{
      let newData = []
      if(!(selectCountry=='All')){
        setFilter(true) 
        newData = data.filter((v)=>{
          return v.location.country==selectCountry
        })
      }else{
        newData=[...data]
      }
      return newData
    }
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

    // checked 資料處理
    // let checkedAr=[]
    function checkUser(v) {
      let checkedAr=[...checkedUser]
      // checkedUser.push(v)
      checkedAr.push(v)
      console.log('checkAr',checkedAr)
      // 存localstorage 
      setCheckedUser(checkedAr)
    }

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
                <td><button 
                  onClick={()=>{
                    console.log(typeof v.gender)
                    setEditDisplay(true)
                    setEditInfo(v)
                  }}>編輯</button></td>
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

    <Editform
      editInfo={editInfo}
      editDisplay={editDisplay}
      setEditDisplay={setEditDisplay}
    /> 
    </>
    );
};

export default Admin;
