import React from 'react';
import { Link } from 'react-router-dom';

const Recipes = props => {

    return (
        <div className="container">
            <div className="row">
                {props.recipes.map( recipe => {
                    return (
                        <div key={recipe.recipe.source} className="col-md-4">
                            <div className="recipes__box">
                                <img className="recipe__box-img" src={recipe.recipe.image} alt={recipe.recipe.label} />
                                <div className="recipe__text">
                                    <h5 className="recipes__title">
                                        {recipe.recipe.label.length < 20 ? `${recipe.recipe.label}` : `${recipe.recipe.label.substring(0, 25)}...`}</h5>
                                    <p className="recipes__subtitle">Source: <span>{recipe.recipe.source}</span></p>
                                </div>
                                <button className="recipe_buttons">
                                    <Link to={{
                                            pathname: `/recipe/${props.ingredient}/${recipe.recipe.source}`,
                                            state: {recipe}
                                    }}>View Recipe</Link>
                                </button>
                            </div>
                        </div>
                )})}
            </div>
        </div>
    );
}

export default Recipes;