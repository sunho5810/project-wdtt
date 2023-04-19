import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { memberAction } from '../redux/actions/memberAction';

const MemberInfoCard = ({item, index}) => {

  const authenticate = useSelector((state) => state.auth.authenticate);
  const modifiedList = useSelector((state) => state.members.modifiedList);

  const dispatch = useDispatch();

  const replaceData = (id, value) => {
    dispatch(memberAction.postMemberData(id, value));
  }

  if(authenticate){
    return (
      <tr>
        <td className='index'>{index + 1}</td>
        <td className='backNum'>{item.backNum}</td>
        <td className='name'>{item.name}</td>
        <td className='tier'>
          <select defaultValue={item.tier}>
            <option defaultValue={item.tier}>{item.tier}</option>
            <option value="1">1</option>
            <option value="1.5">1.5</option>
            <option value="2">2</option>
            <option value="2.5">2.5</option>
            <option value="3">3</option>
          </select>
        </td>
        <td className='tier'><input type='number' placeholder={item.attendance} defaultValue={item.attendance}/></td>
        <td className='late'><input type='number' placeholder={item.late} defaultValue={item.late}/></td>
        <td className='goals'><input type='number' placeholder={item.goals} defaultValue={item.goals} onChange={(e) => replaceData(index, "goals", e.target.value)}/></td>
        <td className='assists'><input type='number' placeholder={item.assists} defaultValue={item.assists} onChange={(e) => replaceData(index, "assists", e.target.value)}/></td>
      </tr>
    )
  } else {
    return (
      <tr>
        <td className='backNum'>{item.backNum}</td>
        <td className='name'>{item.name}</td>
        <td className='tier'>{item.tier}</td>
        <td className='tier'>{item.attendance}</td>
        <td className='late'>{item.late}</td>
        <td className='goals'>{item.goals}</td>
        <td className='assists'>{item.assists}</td>
      </tr>
    )
  }

  
}

export default MemberInfoCard