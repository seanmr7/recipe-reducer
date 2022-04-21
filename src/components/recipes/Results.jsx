function Results({ title, ingredients, instructions }) {
  return (
    <>
      <div className='font-medium my-10 p-5 container w-11/12 mx-auto bg-slate-100/80 text-stone-900 h-1/2 rounded-lg'>
        <h1 className='font-semibold text-2xl text-center font-bold mb-2'>{title}</h1>
        <div className='mx-auto lg:w-3/4'>
          <h1 className='font-semibold w-3/4 text-2xl mb-2'>Ingredients</h1>
          <ul className='mb-5 list-disc list-inside flex flex-col flex-wrap space-y-1 lg:w-1/2 lg:max-h-80 lg:gap-x-4'>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className='mx-auto lg:w-3/4'>
          <h1 className='font-semibold w-3/4 text-2xl mb-2'>Instructions</h1>
          <ul className='list-decimal list-inside space-y-1.5'>
            {instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Results
