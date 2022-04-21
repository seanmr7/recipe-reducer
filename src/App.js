import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import InputForm from './components/recipes/InputForm'
import Footer from './components/layout/Footer'
import Results from './components/recipes/Results'
import Loading from './components/layout/Loading'

function App() {
  const [recipeData, setRecipeData] = useState({
    title: '',
    ingredients: [],
    instructions: [],
  })

  const [displayResults, setDisplayResults] = useState(false)

  const pullData = (data) => {
    setRecipeData({
      title: data.title,
      ingredients: data.ingredients,
      instructions: data.instructions,
    })
  }

  return (
    <main className='h-full min-h-screen w-screen flex flex-col content-center justify-center bg-right-bottom md:bg-center'>
      <Router>
        <div className='h-full grow flex flex-col justify-center'>
          <InputForm pullData={pullData} />
          <Results
            title={recipeData.title}
            ingredients={recipeData.ingredients}
            instructions={recipeData.instructions}
          />
          <Loading />
        </div>
        <Footer />
      </Router>
    </main>
  )
}

export default App
