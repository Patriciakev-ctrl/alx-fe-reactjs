import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const { filteredRecipes, recipes, setRecipes } = useRecipeStore(state => ({
    filteredRecipes: state.filteredRecipes,
    recipes: state.recipes,
    setRecipes: state.setRecipes,
  }));

  useEffect(() => {
    // Assuming fetchRecipes is a function that fetches all your recipes
    const fetchAndSetRecipes = async () => {
      const fetchedRecipes = await fetchRecipes();
      setRecipes(fetchedRecipes); // Sets both recipes and filteredRecipes
    };

    fetchAndSetRecipes();
  }, [setRecipes]);

  return (
    <ul>
      {filteredRecipes.map(recipe => (
        <li key={recipe.id}>{recipe.title}</li>
      ))}
    </ul>
  );
};

export default RecipeList;
