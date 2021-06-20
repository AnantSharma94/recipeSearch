import React, {useState, useEffect} from 'react';

import { Link } from 'react-router-dom';

const Recipe = props =>{

    const [activeRecipe, setActiveRecipe] = useState([]);

    useEffect(() => {

        const fetchRecipe = () => {
            //console.log(props);
            setActiveRecipe(props.location.state.recipe.recipe);       
        }
        
        fetchRecipe();
    },[]);
    
    useEffect(()=>{    
        //console.log(activeRecipe);
    }, [activeRecipe]);


    return (
        <div className="container">
            { activeRecipe.length !== 0 && 
                <div className="active-recipe">
                    <img src={activeRecipe.image} alt={activeRecipe.label} className="active-recipe__img" />
                    <h3 className="active-recipe__title">{activeRecipe.label}</h3>
                    <h4 className="active-recipe__publisher">Source: <span>{activeRecipe.source}</span></h4>
                    <p className="active-recipe__website">Website:
                        <span><a href={activeRecipe.url}>{activeRecipe.url}</a></span>
                    </p>
                    <p className='active-recipe__publisher'>Ingredient List: </p>
                        <span>
                            <ul style={{color:'crimson'}}>
                                {props.location.state.recipe.recipe.ingredientLines.map(ingredient=>{
                                    return (<li key={ingredient}>{ingredient}</li>);
                                })}
                            </ul>
                        </span>
                    <button className="active-recipe__button">
                        <Link to='/'>GO BACK</Link>
                    </button>
                </div>
            }
        </div>
    );
}

export default Recipe;