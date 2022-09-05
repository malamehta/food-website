import React from 'react';
import {FaPizzaSlice,FaHamburger} from "react-icons/fa";
import {GiNoodles,GiChopsticks} from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import './style.css'

function Category() {
  return (
    <div className='links-wrapper'>
        <NavLink to={"/cuisine/Italian"}  className='item'>
            <FaPizzaSlice className='category-icon'/>
            <h3 className='category-name'>Italian</h3>
        </NavLink>
        <NavLink to={"/cuisine/American"} className='item'>
           <FaHamburger className='category-icon'/>
            <h3 className='category-name'>American</h3>
        </NavLink>
        <NavLink to={"/cuisine/Thai"} className='item'>
            <GiNoodles className='category-icon'/>
            <h3 className='category-name'>Thai</h3>
        </NavLink>
        <NavLink to={"/cuisine/Japanese"} className='item'>
            <GiChopsticks className='category-icon'/>
            <h3 className='category-name'>japanese</h3>
        </NavLink>
    </div>
  )
}

export default Category