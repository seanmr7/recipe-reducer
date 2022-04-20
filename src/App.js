import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import InputForm from './components/forms/InputForm'
import Footer from './components/layout/Footer'

function App() {
  const [receipData, setRecipeData] = useState({
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
        <Footer />
      </Router>
    </main>
  )
}

export default App
