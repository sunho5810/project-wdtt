import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [checkID, setCheckID] = useState("");
    const [checkPW, setCheckPW] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const authenticateFunc = (e) => {
        e.preventDefault();

        if(checkID == "wdtt" && checkPW == "wdtt1234"){
            dispatch({type: "AUTHENTICATE_SUCCESS"});
            navigate("/");
        } else {
            dispatch({type: "AUTHENTICATE_FAIL"});
        }

    }

  return (
    <div className='inner'>
        <Form onSubmit={authenticateFunc}>
            <Form.Group className="mb-3" controlId="formID">
                <Form.Label>아이디</Form.Label>
                <Form.Control type="text" placeholder="아이디를 입력해주세요" onChange={(e) => setCheckID(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>비밀번호</Form.Label>
                <Form.Control type="password" placeholder="비밀번호를 입력해주세요" onChange={(e => setCheckPW(e.target.value))}/>
            </Form.Group>
            <Button variant="primary" type="submit">로그인</Button>
        </Form>
    </div>
  )
}

export default Login