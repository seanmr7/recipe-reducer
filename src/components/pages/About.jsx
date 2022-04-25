import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      <div className='h-full grow flex flex-col justify-start'>
        <div className='bg-slate-100/80 container fade-in font-medium h-1/2 max-w-full my-10 mx-auto overflow-hidden p-5 rounded-lg text-stone-900 w-11/12'>
          <h1 className='font-semibold text-2xl text-center font-bold mb-2'>About</h1>
          <p className='text-lg p-3'>
            A React app to strip out all the clutter from a recipe. This app pulls out the
            ingredients and instructions from the specified external url.
          </p>
          <p className='text-md p-3'>
            <strong>Motivation:</strong> I built this app because I was tired of scrolling
            through blog style pages to find the actual recipe that I wanted to cook.
          </p>
          <p className='text-md p-3'>
            <strong>Challenges:</strong> The biggest challenge was creating the web
            scraper. It had to be able to pick out the ingredients and instructions for a
            recipe from many varied sources. I accomplished this by examining various
            recipe websites and picking out specific classes for the scraper to query.
            Based on the hostname, the parsing function will call the scraping functions
            and pass in the required class names and html elements to pull out the
            ingredients and instructions.
          </p>
          <Link className='text-md p-3' to='/'>
            Return home
          </Link>
        </div>
      </div>
    </>
  )
}

export default About
