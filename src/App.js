import './App.css';
import data from './data/players.json'
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Nav from './components/Nav';
import Login from './pages/Login';
import Cmoney from './pages/Cmoney'

function App() {
  // 判斷是否在登入頁面
  let login = window.location.pathname
  return (
    <Router>
      <Switch>
        {login.includes('login') ? '' :<Nav/>}
        {/* 自選清單頁 */}
        <Route path="/#/customer">
        </Route>
        {/* 會員列表 */}
        <Route path="/#/admin">
        </Route>
        {/* 登入頁 */}
        <Route path="/login">
          <Login/>
        </Route>
        {/* 首頁 */}
        <Route path="/#/">
          {/* <Cmoney/> */}
        </Route>        
      </Switch>
    </Router>
  );
}

export default App;
