import { useEffect } from 'react'

function Results({ title, ingredients, instructions, url }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className='bg-slate-100/80 container fade-in font-medium h-1/2 max-w-full my-10 mx-auto overflow-hidden p-5 rounded-lg text-stone-900 w-11/12'>
        <h1 className='font-semibold text-2xl text-center font-bold mb-2'>{title}</h1>
        <div className='mx-auto lg:w-3/4'>
          <h1 className='font-semibold w-3/4 text-2xl mb-2'>Ingredients</h1>
          <ul className='mb-5 list-disc list-inside flex flex-col flex-wrap lg:w-1/2 lg:max-h-80 lg:gap-x-4'>
            {ingredients.map((ingredient, index) => (
              <li className='mt-1' key={index}>
                {ingredient}
              </li>
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
