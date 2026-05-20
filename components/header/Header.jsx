import React from 'react'
import './Header.css';
import Search from '../search/Search';

export default function Header({setSearch}) {
    
    return (
        <section className='header'>
            <div className='divHeader'>
                <h1 className='titleHeader'>Easy Home <br />Cooking</h1>
                <p className='description'>Over 20+ Receipts</p>
                <button className='joinUsButton'>JOIN US</button>
            </div>
            <Search setSearch={setSearch}/>
        </section>
    )
}
