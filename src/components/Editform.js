import React,{ useState, useEffect }  from 'react';
import { Link } from 'react-router-dom'

const Editform = (props) => {
    const {editInfo,editDisplay, setEditDisplay} = props

    return (        
    <>
    {(!editInfo || !editInfo.name) ? '' : 
    (<div class="editback" 
        style={{display: editDisplay ? 'flex' : 'none' }}
        onClick={()=>{
            setEditDisplay(false)
         }}>
        <div class="editwrap">
            <div class="header">編輯會員資料</div>
            <div class="editform">
                <div class="imgwrap">
                    <img src={editInfo.picture.large} alt=""/>
                    <input type="file"/>
                </div>
                <div class="userinfo">
                    <div class="group">
                        <p>First Name</p>
                        <input type="text" value={editInfo.name.first}/>
                    </div>
                    <div class="group">
                        <p>Last Name</p>
                        <input type="text" value={editInfo.name.last}/>
                    </div>
                    <div class="w100">
                        <p>Birth</p>
                        <input type="datetime" value={editInfo.dob.date}/>
                    </div>
                    <div class="group">
                        <p>E-Mail</p>
                        <input type="email" 
                            value={editInfo.email}
                        />
                    </div>
                    <div class="group">
                        <p>Gender</p>
                        <div class="radio">
                            <input type="radio" name="gender" id="male"
                            checked={(editInfo.gender=='male')}
                            />
                            <label for="male">Male</label>
                            <input type="radio" name="gender" id="female"
                            checked={(editInfo.gender=='female')}
                            />
                            <label for="female">Female</label>
                        </div>
                    </div>
                    <div class="group">
                        <p>Country</p>                    
                        <input type="text" value={editInfo.location.country}/>
                    </div>
                    <div class="group">
                        <p>State</p>                    
                        <input type="text" value={editInfo.location.state}/>
                    </div>
                    <div class="group">
                        <p>City</p>                    
                        <input type="text" value={editInfo.location.city}/>
                    </div>
                    <div class="group">
                        <p>Street</p>                    
                        <input type="text" value={editInfo.location.street.name}/>
                    </div>
                    <p class="w100">Number</p> 
                    <div class="group">                
                        <input type="number" value={editInfo.location.street.number}/>
                    </div>
                    <p class="w100">Coordinates</p>                    
                    <div class="group"><input type="number" value={editInfo.location.coordinates.latitude}/></div>
                    <div class="group"><input type="number" value={editInfo.location.coordinates.longitude}/></div>
                </div>
            </div>
            <div class="btnwrap">
                
                <button class="confirm">確定</button>
                <button class="cancel">取消</button>
            </div>
        </div>
    </div>)}
    </>
    );
};

export default Editform;
