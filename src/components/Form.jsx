import React from 'react';

const Form = props => {
    return (
        <form style={{ marginBottom:"2rem" }}>
            <input className="form__input" type="text" placeholder="Ingredient" onChange={(event) => props.getInputValue(event)}/>
            <button className="form__button" onClick={(e) => props.getRecipe(e)}>Search</button>
        </form>
    );
}

export default Form;