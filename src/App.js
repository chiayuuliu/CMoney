import './App.css';
import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Nav from './components/Nav';
import Login from './pages/Login';
import Cmoney from './pages/Cmoney';
import Admin from './pages/Admin';

function App() {

  const [ userData, setUserData] = useState([])
  const [totalpage, setTotalpage] = useState(8)
  const [ pageAr, setPageAr] = useState([]);

  // 細節頁資訊
  const [ detailInfo, setDetailInfo]= useState([])

  function page(totalpage) {
    const pagination = []
    let i =1
    for (let i = 1 ; i<=totalpage ; i++){
      pagination.push(i)
    }
    if(i=totalpage){
      setPageAr(pagination)
      console.log(pageAr)
    }
  }
  // 拿全部資料
  useEffect(() => {        
    fetch('https://randomuser.me/api/?results=150')
    .then(r=>r.json())
    .then(data=>{
        let user = data.results;
        // 設定資料跟總頁數
        setUserData(user)
        setTotalpage(Math.ceil(user.length/20))
        setDetailInfo(user[0])
    })
}, []);


  // 判斷是否在登入頁面
  let login = window.location.pathname

  return (
    <>
    {login.includes('login') ? '' :<Nav/>}    
    <Router>
      <Switch>
        {/* 自選清單頁 */}
        <Route path="customer">
        </Route>
        {/* 會員列表 */}
        <Route path="/admin">
          <Admin/>
        </Route>
        {/* 登入頁 */}
        <Route path="/login">
          <Login/>
        </Route>
        {/* 首頁(圖表) */}
        <Route path="/">
          <Cmoney
            userData={userData}
            totalpage={totalpage}
            detailInfo={detailInfo}
            setDetailInfo={setDetailInfo}
          />
        </Route>        
      </Switch>
    </Router>
    </>
  );
}

export default App;
