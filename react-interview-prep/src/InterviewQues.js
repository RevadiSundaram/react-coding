import React from 'react'

const InterviewQues = () => {

    const loadJson =  async(url) =>{
        let response = await fetch(url);
        if (response.status == 200){
            let json = await response.json();
            return json;
        }
        throw new Error(response.status)
    }
    loadJson("https.//fakeurl.com/no-such-user.json");
  return (
    <div>InterviewQues</div>
  )
}

export default InterviewQues