import { useState } from 'react'
import { scrapeURL } from '../../scraper/Scraper'

function InputForm({ pullData }) {
  const [url, setUrl] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()

    const parsedData = await scrapeURL(url)
    pullData(parsedData)
  }

  return (
    <div className='container mx-auto grow flex justify-center content-center items-center'>
      <form onSubmit={onSubmit}>
        <div className='container mx-auto text-center flex'>
          <div className='input-group'>
            <input
              type='text'
              id='url'
              value={url}
              onChange={(e) => setUrl(e.target.value)}
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
