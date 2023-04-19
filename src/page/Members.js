import React, { useEffect, CSSProperties } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { memberAction } from '../redux/actions/memberAction';
import MemberInfoCard from '../component/MemberInfoCard';
import { ClipLoader } from 'react-spinners';
import { Button } from 'react-bootstrap';

const Members = () => {

  const {membersList, loading} = useSelector((state) => state.members);
  const authenticate = useSelector((state) => state.auth.authenticate);

  const dispatch = useDispatch();
  
  useEffect(() => {
      dispatch(memberAction.getMemberData());
  }, []);

  if(loading){
    // console.log("loading1111111?", loading);
    // console.log("membersList1111?", membersList);
    
    return (
      <ClipLoader
      color="#000"
      loading={loading}
      size={150}
      />
    )
  } else {
    // console.log("loading2222222?", loading);
    // console.log("membersList2222?", membersList[0]);
    return (
      <div className='inner'>
        <table className='tbl'>
          <colgroup>
            <col width={"10%"}/>
            <col width={"10%"}/>
            <col width={"20%"}/>
            <col width={"20%"}/>
            <col width={"10%"}/>
            <col width={"10%"}/>
            <col width={"10%"}/>
            <col width={"10%"}/>
          </colgroup>
          <thead>
            <tr>
              <th>순서</th>
              <th>등번호</th>
              <th>이름</th>
              <th>티어</th>
              <th>출석</th>
              <th>지각</th>
              <th>골</th>
              <th>어시</th>
            </tr>
          </thead>
          <tbody>
            {
              membersList?.map((item, index) => (
                <MemberInfoCard key={index} index={index} item={item}/>
              ))
            }
          </tbody>
        </table>
        {
          authenticate == true ? <Button variant='dark'>수정</Button> : ""
        }
      </div>
    )
  }
}

export default Members