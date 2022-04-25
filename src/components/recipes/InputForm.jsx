import { useState } from 'react'
import { scrapeData } from '../../scraper/Scraper'

function InputForm({ submitAndDisplay }) {
  const [url, setUrl] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()

    // Scrape ingredients and instructions from the url
    const parsedData = await scrapeData(url)
    // Add url to the data object
    parsedData.url = url

    // Pass data up to App.js
    submitAndDisplay(parsedData)

    // Delay clearing the form input until the recipe has loaded
    setTimeout(function () {
      setUrl('')
    }, 2001)
  }

  return (
    <div className='container mx-auto flex justify-center content-center items-center my-8 overflow-x-hidden'>
      <form onSubmit={onSubmit}>
        <div className='container mx-auto text-center flex'>
          <div className='input-group'>
            <input
              type='text'
              id='url'
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder='Recipe url'
              className='input'
            />
            <input type='submit' className='btn btn-primary' />
          </div>
        </div>
      </form>
    </div>
  )
}

export default InputForm
