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

  const [showForm, setShowForm] = useState(true)
  const [displayResults, setDisplayResults] = useState(false)
  const [loading, setLoading] = useState(false)

  const submitAndDisplay = (data) => {
    setRecipeData({
      title: data.title,
      ingredients: data.ingredients,
      instructions: data.instructions,
    })
    setLoading(true)
    setTimeout(function () {
      setDisplayResults(true)
      setLoading(false)
    }, 2000)
  }

  return (
    <main className='h-full min-h-screen w-screen flex flex-col content-center justify-center bg-right-bottom md:bg-center'>
      <Router>
        <div className='h-full grow flex flex-col justify-center'>
          {displayResults && (
            <Results
              title={recipeData.title}
              ingredients={recipeData.ingredients}
              instructions={recipeData.instructions}
              url={recipeData.url}
            />
          )}
          {loading && <Loading />}
          {showForm && <InputForm submitAndDisplay={submitAndDisplay} />}
        </div>
        <Footer />
      </Router>
    </main>
  )
}

export default App
