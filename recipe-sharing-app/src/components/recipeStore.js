import {  create }from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
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

  favorites: [],
  addFavorite: (recipeId) => set(state => ({
    favorites: [...new Set([...state.favorites, recipeId])] // Prevent duplicates
  })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  recommendations: [],
  generateRecommendations: () => set(state => {
    // Example recommendation logic based on favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id)
      // Here you can add more logic for personalized recommendations
    );

    // Limit recommendations to 5 for better UI/UX
    return { recommendations: recommended.slice(0, 5) };
  }),
  
}));


export { useRecipeStore };
