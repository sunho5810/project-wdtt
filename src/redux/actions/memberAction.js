import api from "../api";



function getMemberData(){
    const API_KEY = "AIzaSyBflNnPPWkh82yVIR6yDRIxMe_6c5LwqLM";
    const SHEETS_RANGE = "wdtt_members!A3:M35"

    return async (dispatch, getState) => {

        try{
            dispatch({type: "GET_MEMBER_DATA_REQUEST"});

            const memberApi = await api.get(`/1r-86TPWZ2aDclAprYytrEL7XFY8x_ha9n7Ke-AlC7RQ/values/${SHEETS_RANGE}?key=${API_KEY}`);

            // console.log("memberApi?", memberApi);
            
            const jsonData = JSON.stringify(memberApi.data); // 데이터를 문자열로 변환
            localStorage.setItem('sheetData', jsonData); // 데이터를 localStorage에 저장
            
            const sheetData = localStorage.getItem('sheetData'); // 저장된 데이터를 가져옴
            const parsedData = JSON.parse(sheetData); // 가져온 데이터를 객체로 변환

            const formattedData = parsedData.values.map(row => {
                return {
                    backNum: row[0],
                    tier: row[1],
                    name: row[2],
                    attendance: row[10],
                    late: row[8],
                    goals: row[11],
                    assists: row[12]
                };
            });

            // console.log("formattedData?", formattedData); // 필요한 필드만 추출된 데이터를 출력

            dispatch({type: "GET_MEMBER_DATA_SUCCESS", payload: {data : formattedData}});

        } catch(error) {
            dispatch({type: "GET_MEMBER_DATA_FAILURE"})
        }
    }
}

function postMemberData(id, value){
    return async(dispatch, getState) => {
        try{
            dispatch({type: "POST_MEMBER_DATA_REQUEST"});

            // dispatch({type: "POST_MEMBER_DATA_SUCCESS", payload: {id: id, value: value}});


        } catch(error) {
            dispatch({type: "POST_MEMBER_DATA_FAILURE"})
        }
    }
}

export const memberAction = {getMemberData, postMemberData}