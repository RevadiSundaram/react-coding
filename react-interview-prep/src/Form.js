import React, { useState } from 'react'

const Form = () => {
    const [input, setInput] = useState([
        {
            name: "",
            password: ""
        }
    ]);
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setInput({
            ...input, [name]:value
        });
        console.log(input);

    }
  return (
    <div className='text-center'>
        <h1 className='mb-10'>Form</h1>
        <form className='flex flex-col gap-5' onSubmit={(e) => e.preventDefault()}>
            <div>
                <label htmlFor="name">Username - </label>
                <input type='text' value={input.name} name="name" className='p-1 text-sm border border-black' placeholder='Enter for username' id="name"
                onChange={handleInputChange}
                 />
            </div>
            <div>
                <label htmlFor="pass">Password - </label>
                <input type='text' value={input.password} name="password" className='p-1 text-sm border border-black' placeholder='Enter a password' id="pass"
                // onChange={(e) => setPassword(e.target.value)} 
                onChange={handleInputChange}
                />
            </div>
            <button className='bg-green-200 p-2'>Submit</button>
        </form>

        <table className='mt-10 border border-black'>
            <thead>
            <tr>
                <th>Name</th>
                <th>Password</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                {input.map(item => 
                item.name
                )}
                {/* <td>{name}</td>
                <td>{password}</td> */}
                {/* {console.log(input)} */}
            </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Form