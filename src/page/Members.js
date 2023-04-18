import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { memberAction } from '../redux/actions/memberAction';
import MemberInfoCard from '../component/MemberInfoCard';

const Members = () => {

  const memberList = useSelector((state) => state.member.memberList);
  console.log("memberList?", memberList);
  
  const dispatch = useDispatch();
  
  const getMemberData = async() => {
    dispatch(memberAction.getMemberData());
  }
  
  useEffect(() => {
    getMemberData();
    }, []);

    return (
      <div>
        {
          memberList?.map((item) => (
            <div>{item}</div>
          ))
        }
      </div>
    )
}

export default Members