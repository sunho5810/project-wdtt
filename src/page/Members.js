import React, { useEffect } from 'react'

const Members = () => {

    const getGoogleSheetData = async() => {
        let url = `https://sheets.googleapis.com/v4/spreadsheets/1r-86TPWZ2aDclAprYytrEL7XFY8x_ha9n7Ke-AlC7RQ/values/wdtt_members?key=AIzaSyBflNnPPWkh82yVIR6yDRIxMe_6c5LwqLM`
        let response = await fetch(url);
        let data = await response.json();

        console.log("data?", data);
    }

    useEffect(() => {
        getGoogleSheetData();
    }, [])

  return (
    <div>
        
    </div>
  )
}

export default Members