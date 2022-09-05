import React from 'react'
import Category from '../components/Category'
import Cuisine from './Cuisine'
import Home from './Home'
import {Routes,Route} from 'react-router-dom';
import Searched from './Searched';

function Pages() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cuisine/:type' element={<Cuisine/>}/>
      <Route path='/searched/:search' element={<Searched/>}/>
    </Routes>   
        
    </div>
  )
}

export default Pages