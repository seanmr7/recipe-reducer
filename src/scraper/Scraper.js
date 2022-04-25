import * as cheerio from 'cheerio'
import * as scrapers from './ScraperFunctions'

export const scrapeData = async (url) => {
  const corsProxy = process.env.REACT_APP_CORS_PROXY

  const response = await fetch(`${corsProxy}get?url=${encodeURIComponent(`${url}`)}`)

  if (response.ok) {
    const res = await response.json().then((data) => parseRecipe(data.contents, url))
    return res
  }
}

const parseRecipe = (html, url) => {
  const $ = cheerio.load(`${html}`)
  const hostname = new URL(`${url}`).hostname.replace('www.', '')
  let title
  let ingredients = []
  let instructions = []

  // Select h1 element with heading or title classname
  if ($('h1[class*="heading"]').text() !== '') {
    title = $('h1[class*="heading"]').text()
  } else if ($('h1[class*="title"]').text() !== '') {
    title = $('h1[class*="title"]').text()
  }

  // Switch statement based on hostname to pass
  // the correct html tag and class name to get
  // the ingredients and instructions
  switch (hostname) {
    case 'allrecipes.com':
      scrapers.scrapeIngredients($, ingredients, 'li', 'ingredient')
      scrapers.scrapeInstructions($, instructions, 'li', 'instruction')

      instructions.forEach((step, i) => {
        instructions[i] = step.replace(`Step ${i + 1}`, '')
      })
      break
    case 'delish.com':
      scrapers.scrapeIngredients($, ingredients, 'div', 'ingredient-lists')
      scrapers.scrapeInstructions($, instructions, 'li', 'direction-lists')
      break
    case 'epicurious.com':
      scrapers.scrapeIngredients($, ingredients, 'div', 'List-XYTyX')
      scrapers.scrapeInstructions($, instructions, 'p', 'InstructionBody')
      break
    case 'food.com':
      scrapers.scrapeIngredients($, ingredients, 'li', 'recipe-ingredients')
      scrapers.scrapeInstructions($, instructions, 'li', 'recipe-directions')
      break
    case 'foodnetwork.com':
      scrapers.scrapeIngredients($, ingredients, 'span', 'a-Ingredient')
      scrapers.scrapeInstructions($, instructions, 'li', 'o-Method')

      ingredients = ingredients.filter((ingredient) => ingredient.length > 0)
      ingredients.shift()
      break
    case 'tasty.co':
      scrapers.scrapeIngredients($, ingredients, 'li', 'ingredients__section')
      scrapers.scrapeInstructions($, instructions, 'li', 'prep-steps')

      ingredients.splice(0, ingredients.length / 2)
      instructions.splice(0, instructions.length / 2)
      break
    default:
      scrapers.allOtherHostnames($, ingredients, instructions)
  }

  return {
    ingredients,
    instructions,
    title,
  }
}
