import React, { useEffect, useState } from 'react';
import {Link,useParams} from 'react-router-dom';
import {motion} from 'framer-motion';
import styled from 'styled-components';


function Cuisine() {
  const[cuisine,setCuisine]=useState([]);
  let params=useParams()
  const getCuisine=async (name)=>{
        const data=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=4668d4e96ea04b7bb1277181973ab121&cuisine=${name}`)
        const recipes=await data.json();
        setCuisine(recipes.results)
      };
      useEffect(()=>{
        getCuisine(params.type);
        // console.log(params.type)
      },[params.type]);
  return (
    
       <div>
            <h3 className='heading'>{params.type}</h3>
            <div className='container'>
            {cuisine.map((item) => {
                return (
                    <div key={item.id} className="wrapper">
                        <div className='content'>
                            <img src={item.image} alt="recipe image"></img>
                            <p className='title'>{item.title}</p>
                        </div>
                    </div>

                );
            })}
            </div>
        </div>
    
  )
}

export default Cuisine