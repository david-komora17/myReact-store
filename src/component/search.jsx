import React from 'react'
import {useState} from 'react';

export default function SearchArea() {
    const [query, setQuery] = useState('');
    const HandleSearch = (e) => {
        setQuery(e.target.value)
        console.log("Searching for:", e.target.value)
    }
  return (
    <div className='p-4'>
        <input type="text" value = {query} onChange={HandleSearch} placeholder='Search any product...' className='border p-2 rounded w-full'/>
        <p>Showing results for: {query}</p>
    </div>
  )
}

