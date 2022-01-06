import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Admin = (props) => {
    const {userdata} = props
    console.log('userdata',userdata)

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
            <div class="filterresult">
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
              <tr>
                <td><input type="checkbox"/></td>
                <td><img src="./img/avatar.png" alt=""/></td>
                <td>帳號</td>
                <td>劉家佑</td>
                <td>女</td>
                <td>28</td>
                <td>台灣</td>
                <td>chiayuu.liu@gmail.com</td>
                <td><button>編輯</button></td>
              </tr>
            </tbody>
          </table>
    </div>
    <div class="pagewrap">
    </div>
    </>
    );
};

export default Admin;
