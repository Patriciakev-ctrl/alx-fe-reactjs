import React from 'react';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
  const { recipeId } = useParams(); // Get recipeId from URL parameters
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id == recipeId)
  );

  if (!recipe) return <div>Recipe not found!</div>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipeId} />
    </div>
  );
};

export default RecipeDetails;