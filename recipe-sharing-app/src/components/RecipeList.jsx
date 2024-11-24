
// RecipeList component
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  console.log(recipes);
  return (
    
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};
export default RecipeList;
