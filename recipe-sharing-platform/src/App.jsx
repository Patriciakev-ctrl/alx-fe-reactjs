import { useState } from 'react'
import  "./index.css";
import Home from "./components/Home";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
    </>
  )
}

export default App