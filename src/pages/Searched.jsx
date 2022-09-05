import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Searched() {
    const [SearchedRecipes, setSearchedRecipes] = useState([])
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=4668d4e96ea04b7bb1277181973ab121&query=${name}`)
        const recipes = await data.json();
        setSearchedRecipes(recipes.results)
    };
    useEffect(() => {
        getSearched(params.search)
    }, [params.search])
    return (
        <div>
            <h3 className='heading'>{params.search}</h3>
            <div className='container'>
                {SearchedRecipes.map((item) => {
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

export default Searched;