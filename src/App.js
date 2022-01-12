import './App.css';
import React, { useState, useEffect } from 'react'
import { withRouter , useHistory} from 'react-router-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Nav from './components/Nav';
import Login from './pages/Login';
import Cmoney from './pages/Cmoney';
import Admin from './pages/Admin';
import Cookies from 'js-cookie'

// import Customer from './pages/Customer';

function App() {
  let history = useHistory()
  const [ userData, setUserData] = useState([])
  const [totalpage, setTotalpage] = useState(Math.ceil(userData.length/20))
  // 細節頁資訊
  const [ detailInfo, setDetailInfo]= useState({})
  const [ countryList, setCountryList] = useState([])
  // 登入後更新login 狀態(控制顯示畫面)
  const [login, setLogin] = useState(false);

  const [loginState, setLoginState] = useState('');

  // console.log(!!Cookies.get('a'))
  // 拿全部資料
  useEffect(() => {        
    fetch('https://randomuser.me/api/?results=150')
    .then(r=>r.json())
    .then(data=>{
        let user = data.results;
        setDetailInfo(user[0])
        // console.log('app.js detail',detailInfo)
        // 設定資料跟總頁數
        setUserData(user)
        setTotalpage(Math.ceil(user.length/20))
    })
}, []);
useEffect(() => {
  if(!!document.cookie){
    setLogin(true)
  }
}, []);

// 設定資料後生國家list往下傳
useEffect(() => {
  const countryAr=[]
  for(let i=0;i<userData.length;i++){
    if(!countryAr.includes(userData[i].location.country)){
      countryAr.push(userData[i].location.country)
    }
  }
  setCountryList(countryAr)
}, [userData]);

  return (
    <>
    <Router>
    <Nav
        login={login}
        setLogin={setLogin}
      />
      <Switch>
        {/* 自選清單頁 */}
        <Route path="/customer">
          {/* <Customer/> */}
        </Route>

        {/* 會員列表 */}
        <Route path="/admin">
          <Admin
            userData={userData}
            countryList={countryList}
          />
        </Route>

        {/* 登入頁 */}
        <Route path="/login">
          <Login
            setLogin={setLogin}
            loginState={loginState}
            setLoginState={setLoginState}
          />
        </Route>

        {/* 首頁(圖表) */}
        <Route path="/">
          <Cmoney
            login={login}
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
