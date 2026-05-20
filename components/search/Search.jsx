import React from 'react'
import './Search.css';
import { useState } from 'react';


export default function Search({setSearch}) {
    const [inputValue, setInputValue] = useState('');
    const handleSearch = () => {
        setSearch(inputValue);
    }

    return (
        <div className='bigSerach'>
            <div className='search'>
                <i className="fa-solid fa-magnifying-glass icon"></i>
                <input type="text" placeholder='Search recipes here...'  value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button className='searchButton' onClick={handleSearch}>SEARCH</button>
            </div>
        </div>
    )
}
