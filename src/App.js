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
  // 拿資料
  useEffect(() => {        
    fetch('https://randomuser.me/api/?results=20')
    .then(r=>r.json())
    .then(data=>{
        let user = data.results;
        setUserData(user)
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
        <Route path="/customer">
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
          />
        </Route>        
      </Switch>
    </Router>
    </>
  );
}

export default App;
