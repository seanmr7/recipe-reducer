import * as cheerio from 'cheerio'

export const scrapeURL = async (url) => {
  const response = await fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(`${url}`)}`
  )

  if (response.ok) {
    // const json = response.json()
    // parseRecipe(json.contents)

    const res = await response.json().then((data) => parseRecipe(data.contents))
    return res
  }
}

const parseRecipe = (html) => {
  const $ = cheerio.load(`${html}`)

  // Select h1 element with heading or title classname
  let title
  if ($('h1[class*="heading"]').text() !== '') {
    title = $('h1[class*="heading"]').text()
  } else if ($('h1[class*="title"]').text() !== '') {
    console.log('inside else if')
    title = $('h1[class*="title"]').text()
  }

  // Check for word press classes
  if ($('*[class*="wprm"]').text() !== '') {
    let ingredients = []
    let instructions = []
    // Find and store all list elements with ingredient in the class name
    $('*[class*="ingredient"]')
      .find('li')
      .each(function (i, e) {
        ingredients[i] = $(this)
          .text()
          .replace(/\r?\n|\r/g, ' ') // remove carriage returns
          .replace(/[^\x00-\x7F]/g, '') // remove non-ascii characters
        ingredients[i] = ingredients[i].trim()
      })
    // Find and store all list elements with instruction in class name
    $('*[class*="instruction"]')
      .find('li')
      .each(function (i, e) {
        instructions[i] = $(this)
          .text()
          .replace(/\r?\n|\r/g, ' ')
        instructions[i] = instructions[i].trim()
      })
    return {
      ingredients,
      instructions,
      title,
    }
  }
}
