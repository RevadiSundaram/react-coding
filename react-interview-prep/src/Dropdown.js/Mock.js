import React, { useState } from 'react';
import { Data } from './Data';

const Mock = () => {

    const [country, setCountry] = useState("");

    const handleChange = (e) => {
        setCountry(e.target.value);
        
    }

    const findCity = Data.filter(item => item.value === country);
    console.log(findCity);

  return (
    <div className='flex flex-col gap-10 items-center'>
        <h1 className='font-bold'>Select dropdown from country, the Selected dropdown should show cities of the associated Country</h1>
        <div className='flex gap-5'>
        <select value={country} onChange={handleChange}>
            <option value="">Select any Country</option>
            {Data.map((item) => {
                return <option key={item.value} value={item.value}>{item.country}</option>
            })}
        </select>
        <select>
            <option value="">Cities</option>
            { (findCity.length !== 0) && findCity[0].cities.map((item) => {
                return <option>{item}</option>
            })}
        </select>
        </div>
    </div>
  )
}

export default Mock