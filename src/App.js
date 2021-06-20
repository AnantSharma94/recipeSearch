import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import Recipes from './components/Recipes';

const App_Id = "25ce894d";
const Api_Key = "a0f3b787adf02d4ce113026982a290cd";

function App(){

  const [recipes, setRecipes] = useState([]);
  const [ingredient, setIngredient] = useState('chicken');
  const [recipeDataUpdate, setRecipeDataUpdate] = useState([]);

  useEffect( ()=> {
    const loadDefaultPage = async () => {

       const apiCall = await fetch(`https://api.edamam.com/search?q=${ingredient}&app_id=${App_Id}&app_key=${Api_Key}`);
       const data = await apiCall.json();

       setRecipes(data.hits);
    }

    loadDefaultPage();

  }, [])

  useEffect( ()=> {

    const recipeList = JSON.stringify(recipes);
    localStorage.setItem("recipeList", recipeList);

   const json = localStorage.getItem("recipeList");
   const recipeData= JSON.parse(json);
   setRecipeDataUpdate(recipeData);

  }, [recipes]);

  useEffect(()=>{
    console.log(recipeDataUpdate);
  }, [recipeDataUpdate]);


  const getInputValue = (event) => {
    setIngredient(event.target.value);
  }

  const getRecipe = async (e) => {

      e.preventDefault();

     // console.log(ingredient);

      const apiCall = await fetch(`https://api.edamam.com/search?q=${ingredient}&app_id=${App_Id}&app_key=${Api_Key}`);
      const data = await apiCall.json();

      setRecipes(data.hits);

      //setRecipes(recipeDataUpdate);
      //console.log("2: "+recipes);

      
  }
  return (
    <div className="App">
        <div className="App-header">
          <div className="App-title">
            <h1>Food Recipe Finder</h1>
          </div>
          <Form getRecipe={getRecipe} getInputValue={getInputValue} />
          <Recipes recipes={recipes} ingredient={ingredient} />
        </div>
      </div>
  );
}

export default App;
