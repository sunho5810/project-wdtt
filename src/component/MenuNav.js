import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const MenuNav = () => {

    const [menuBtn, setMenuBtn] = useState("");

    const menuBtnClick = () => {
        if(menuBtn === "open"){
            setMenuBtn("");
        } else {
            setMenuBtn("open");
        }
    }

  return (
    <div className='header'>
        <div className="inner">
            <h1><Link to={"/"} onClick={()=>{setMenuBtn("")}}><img src='/public/images/common/wdttLogo.png' alt='로고' /></Link></h1>
            <div onClick={menuBtnClick} className={`menuBtn ${menuBtn}`}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={`headerList ${menuBtn}`}>
                <li className="headerList__li headerList__li">
                    <Link to={"/members"} className="headerList__li__link" onClick={()=>{setMenuBtn("")}}>Members</Link>
                </li>
                <li className="headerList__li headerList__li">
                    <Link to={"/team/:id"} className="headerList__li__link" onClick={()=>{setMenuBtn("")}}>Team</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default MenuNav