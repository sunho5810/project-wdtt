import { Route, Routes } from 'react-router-dom';
import './App.css';
import './reset.css';
import './font.css';
import MenuNav from './component/MenuNav';
import Home from './page/Home';
import Members from './page/Members';
import Team from './page/Team';

// Home


/* 엑셀에서 데이터 뽑아오기 */
// Members
// 회원들 정보 나오게하기
// 이름, 티어, 출결, 스탯(골, 어시)

// Team
// 오늘의 팀 정보 가져와서 뿌려주기
// 날짜를 기점으로 출전 했는지 안했는지 체크
// 오늘 기록 적을 수 있게 해주기

function App() {
  return (
    <div>
      <MenuNav />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/members' element={<Members />}/>
        <Route path='/team/:id' element={<Team />}/>
      </Routes>
    </div>
  );
}

export default App;
