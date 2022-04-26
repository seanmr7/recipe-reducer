import { useState } from 'react'
import InputForm from '../recipes/InputForm'
import Results from '../recipes/Results'
import Loading from '../layout/Loading'

function Main() {
  const [recipeData, setRecipeData] = useState({
    title: '',
    ingredients: [],
    instructions: [],
    url: '',
  })

  const [displayResults, setDisplayResults] = useState(false)
  const [loading, setLoading] = useState(false)

  const submitAndDisplay = (data) => {
    if (displayResults) {
      setDisplayResults(false)
    }
    setLoading(true)

    setRecipeData({
      title: data.title,
      ingredients: data.ingredients,
      instructions: data.instructions,
      url: data.url,
    })

    setDisplayResults(true)
    setLoading(false)
  }
  return (
    <>
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
        <InputForm submitAndDisplay={submitAndDisplay} />
      </div>
    </>
  )
}

export default Main
