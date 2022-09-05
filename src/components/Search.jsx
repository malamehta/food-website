import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './style.css'

function Search() {
    const[inpVal,setInpVal]=useState("");
    const navigate=useNavigate();
    const submitHandler=(e)=>{
        e.preventDefault();
        navigate("/searched/"+inpVal)
    }
    return (
        <div className='form-section'>
            <div className='form-container'>
                <form onSubmit={submitHandler}>

                    <input
                        type='text'
                        placeholder='Search Recipi'
                        value={inpVal}
                        onChange={(e)=>setInpVal(e.target.value)}
                    >
                    </input>
                    <button className='search-btn' onClick={submitHandler}>Search</button>
            
                </form>
            </div>
        </div>
    )
}

export default Search