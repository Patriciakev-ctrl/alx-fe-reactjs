// src/components/DeleteRecipeButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    // Assume deleteRecipe is a function that deletes a recipe.
    await deleteRecipe(recipeId); // Replace with your actual delete function
    
    // Navigate to the desired route, e.g., the recipes list
    navigate('/recipes'); // Update this path as necessary
  };

  return (
    <button onClick={handleDelete}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;