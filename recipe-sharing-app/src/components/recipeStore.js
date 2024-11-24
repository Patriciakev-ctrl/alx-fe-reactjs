import {  create }from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [{title:'pain',description:'Farine et sel'}],
  addRecipe: recipe => set(state => ({ recipes: [...state.recipes, recipe] })),
  deleteRecipe: recipeId => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId),
  })),
  updateRecipe: updatedRecipe => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
  })),
  searchTerm: '', // User input for search
  filteredRecipes: [], // Filtered list of recipes based on search term
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    set(state => ({
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(term.toLowerCase()) ||
        recipe.ingredients.some(ingredient =>
          ingredient.toLowerCase().includes(term.toLowerCase())
        )
      )
    }));
  },
  setRecipes: (newRecipes) => set({ recipes: newRecipes, filteredRecipes: newRecipes }),
  
}));


export { useRecipeStore };
