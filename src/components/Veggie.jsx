import React, { useEffect, useState } from 'react';
import './style.css'

function Popular() {
    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggie();
    }, []);
    const getVeggie = async () => {
        const check=localStorage.getItem("veggie");
        if(check){
            setVeggie(JSON.parse(check))
        }else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=4668d4e96ea04b7bb1277181973ab121&number=12&tags=vegetarian`);
            const data = await api.json();
            localStorage.setItem("veggie",JSON.stringify(data.recipes))
            setVeggie(data.recipes);
            console.log(data.recipes)
        }
       
    }
    return (
        <div>
            <h3 className='heading'>Our vegeterian Recipe</h3>
            <div className='container'>
            {veggie.map((recipe) => {
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