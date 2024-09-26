import React, { useEffect, useState } from 'react'

const Search = () => {
    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState("");
    useEffect(() => {
        fetchAPI();
    },[]);
    const fetchAPI = async() => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments");
        const json = await response.json();
        setData(json);
    }
    console.log(searchData);
    const searchAPI = () => {
        const result = data.filter((each) => each.email.toLowerCase().includes(searchData.toLowerCase()) );
        return result;
    }
    const resultData = searchAPI();
  return (
    <div>
        <h1 className='font-bold mb-10'>Searching some name from list of Comments</h1>
        

        <table className='border mt-10'>
            <thead>
                <tr className='border p-2'>
                <th className='border p-2'>ID</th>
                <th className='border p-2'>Name</th>
                <th className='border p-2'>Email</th>
                </tr>
            </thead>
            <tbody>
            {resultData && resultData.map((each) => {
           return <tr className='border' key={each.id}>
            <td className='border p-1'>{each.id}</td>
            <td className='border p-1'>{each.name}</td>
            <td className='border p-1'>{each.email}</td>
            
            </tr>
        })} 
            </tbody>
        </table>
        
        <form className='flex gap-5 m-10' onSubmit={(e) => e.preventDefault()}>
            <input type='text' value={searchData} className='w-[200px] border border-black p-2' placeholder='Search'
            onChange={(e) => {setSearchData(e.target.value);
                
            }} />
            <button onClick={searchAPI} className='bg-green-100 p-2 cursor-pointer'>Submit</button>
        </form>
        
           
        <table className='border mt-10'>
            <thead>
                <tr className='border p-2'>
                <th className='border p-2'>ID</th>
                <th className='border p-2'>Name</th>
                <th className='border p-2'>Email</th>
                </tr>
            </thead>
            <tbody>
            {resultData && resultData.map((each) => {
           return <tr className='border' key={each.id}>
            <td className='border p-1'>{each.id}</td>
            <td className='border p-1'>{each.name}</td>
            <td className='border p-1'>{each.email}</td>
            
            </tr>
        })} 
            </tbody>
        </table>
    
    </div>
  )
}

export default Search