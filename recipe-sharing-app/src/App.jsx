import { useState } from 'react'
import {  BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css'
import RecipeDetails from "./components/RecipeDetails";
import RecipeList from "./components/RecipeList";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<RecipeList />} />
      <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
