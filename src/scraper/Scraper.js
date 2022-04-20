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
          .replace(/\r?\n|\r/g, ' ')
        ingredients[i] = ingredients[i].trim()
      })
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
    }
  }

  // const ingredients = $('*[class*="ingredient"]').find('li')
  // ingredients.each(function (i, e) {
  //   console.log($(this).text())
  // })
}
