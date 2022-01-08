import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Pagination from './../components/Pagination';

const Admin = (props) => {
    const {userData} = props
    // console.log('userData',userData)

    const [ nowPage, setNowPage] = useState(1)
    const [ userList, setuserList] = useState([]);


    useEffect(() => {
      let newData =userData.slice((nowPage-1)*10,(nowPage*10))
      setuserList(newData)
      console.log(userData)
    }, [userData]);



    return (
    <>
    <div class="memberwrap">
        <h2 class="title">會員列表</h2>
        {/* 篩選區 */}
        <div class="memberfilter">
            <div class="filter">
                <select name="filter" id="country">
                    <option value="">全部國家</option>
                </select>
                <select name="filter" id="gender">
                    <option value="">全部性別</option>
                </select>
            </div>
            <div class="filterResult">
                <p>篩選結果</p>
                <p>共150人</p>
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
                <td><input type="checkbox"/></td>
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
    </div>
    <div class="pagewrap">
      {/* <Pagination
        nowPage={nowPage}           
      /> */}
    </div>
    </>
    );
};

export default Admin;
