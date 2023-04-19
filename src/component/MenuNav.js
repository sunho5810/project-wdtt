import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const MenuNav = () => {

    const authenticate = useSelector((state) => state.auth.authenticate);

    const [menuBtn, setMenuBtn] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const menuBtnClick = () => {
        if(menuBtn === "open"){
            setMenuBtn("");
        } else {
            setMenuBtn("open");
        }
    }

    const gotoLogin = () => {
        authenticate == true ? dispatch({type: "AUTHENTICATE_FAIL"}) : navigate("/login");
        
    }

  return (
    <div className='header'>
        <div className="inner">
            <h1><Link to={"/"} className='logo' onClick={()=>{setMenuBtn("")}}></Link></h1>
            <div className='navBtns'>
                <div className='login' onClick={gotoLogin}>{authenticate == true ? "로그아웃" : "로그인"}</div>
                <div onClick={menuBtnClick} className={`menuBtn ${menuBtn}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={`memuWrap ${menuBtn}`}>
                <ul className="headerList">
                    <li className="headerList__li headerList__li">
                        <Link to={"/members"} className="headerList__li__link" onClick={()=>{setMenuBtn("")}}>Members</Link>
                    </li>
                    <li className="headerList__li headerList__li">
                        <Link to={"/team/:id"} className="headerList__li__link" onClick={()=>{setMenuBtn("")}}>Team</Link>
                    </li>
                </ul>

                {/* <Link to={"/login"} className="login" onClick={()=>{setMenuBtn("")}}>로그인</Link> */}
            </div>
        </div>
    </div>
  )
}

export default MenuNav