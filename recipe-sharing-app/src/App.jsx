import { useState } from 'react'
import {  BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css'
import RecipeDetails from "./components/RecipeDetails";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";
import FilteredRecipes from "./components/filteredRecipes";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
          <Route path="/recipes/add" element={<AddRecipeForm/>} />
        </Routes>
      </BrowserRouter>
      <div style={{ padding: '2rem' }}>
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <RecipeList />
       
      </div>
  </>
  )
}

export default App
