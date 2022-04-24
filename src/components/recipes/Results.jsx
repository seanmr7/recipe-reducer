import { useEffect } from 'react'

function Results({ title, ingredients, instructions, url }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className='max-w-full font-medium my-10 p-5 container w-11/12 mx-auto bg-slate-100/80 text-stone-900 h-1/2 rounded-lg overflow-hidden'>
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
      <a
        href={`${url}`}
        className='text-stone-900 text-center p-1'
        target='_blank'
        rel='noreferrer'>
        To original recipe
      </a>
    </>
  )
}

export default Results
