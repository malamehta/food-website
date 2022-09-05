import React, { useEffect, useState } from 'react';
import './style.css'

function Popular() {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);
    const getPopular = async () => {
        const check=localStorage.getItem("popular");
        if(check){
            setPopular(JSON.parse(check))
        }else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=4668d4e96ea04b7bb1277181973ab121&number=9`);
            const data = await api.json();
            localStorage.setItem("popular",JSON.stringify(data.recipes))
            setPopular(data.recipes);
            console.log(data.recipes)
        }
       
    }
    return (
        <div>
            <h3 className='heading'>Popular Recipe</h3>
            <div className='container'>
            {popular.map((recipe) => {
                return (
                    <div key={recipe.id} className="wrapper">
                        <div className='content'>
                            <img src={recipe.image} alt="recipe image"></img>
                            <p className='title'>{recipe.title}</p>
                        </div>
                    </div>

                );
            })}
            </div>
        </div>
    )
}



export default Popular;