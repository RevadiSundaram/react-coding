import React, { useEffect, useState } from 'react'

const Data = () => {
    const [data, setData] = useState("");

    useEffect (() => {
        fetchData();
    },[]);

    const fetchData = async() => {
        const fetchAPI = await fetch("https://jsonplaceholder.typicode.com/comments");
        const response = await fetchAPI.json();
        setData(response);
        console.log(response);

    }
  return (
    <div>
        <table>
            <thead>
                <tr className='border'>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
            {
            data ? data.map((item) => { 
                return <tr className='border' key={item.id}>
                <td>{item.id}</td>
                <td>{item.email}</td>
                <td>{item.name}</td>
                </tr>
            }
            ) : null 
        } 
            </tbody>
        </table>
        
    </div>
  )
}

export default Data;