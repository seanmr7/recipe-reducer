import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import InputForm from './components/recipes/InputForm'
import Footer from './components/layout/Footer'
import Results from './components/recipes/Results'

function App() {
  const [recipeData, setRecipeData] = useState({
    ingredients: [],
    instructions: [],
  })

  const pullData = (data) => {
    setRecipeData({
      ingredients: data.ingredients,
      instructions: data.instructions,
    })
  }

  return (
    <main className='h-screen flex flex-col bg-right-bottom md:bg-center'>
      <Router>
        <InputForm pullData={pullData} />
        <Results
          ingredients={recipeData.ingredients}
          instructions={recipeData.instructions}
        />
        <Footer />
      </Router>
    </main>
  )
}

export default App
