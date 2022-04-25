export const scrapeIngredients = ($, ingredients, tag, className) => {
  $(`*[class*="${className}"]`)
    .find(`${tag}`)
    .each(function (i, e) {
      ingredients[i] = $(this)
        .text()
        .replace(/\r?\n|\r/g, ' ')
      ingredients[i] = ingredients[i].trim()
    })
}

export const scrapeInstructions = ($, instructions, tag, className) => {
  $(`*[class*="${className}"]`)
    .find(`${tag}`)
    .each(function (i, e) {
      instructions[i] = $(this)
        .text()
        .replace(/\r?\n|\r/g, ' ')
      instructions[i] = instructions[i].trim()
    })
}

export const allOtherHostnames = ($, ingredients, instructions) => {
  // Check for word press classes
  if ($('*[class*="wprm"]').text() !== '') {
    scrapeIngredients($, ingredients, 'li', 'ingredient')
    scrapeInstructions($, instructions, 'li', 'instruction')

    ingredients.forEach((ingredient, i) => {
      ingredients[i] = ingredient.replace(/[^\x00-\x7F]/g, '')
    })
  }
  // check for tasty-recipes wrapper classes
  else if ($('*[class*="tasty-recipes"]').text() !== '') {
    scrapeIngredients($, ingredients, 'li', 'tasty-recipes-ingredients')
    scrapeInstructions($, instructions, 'li', 'tasty-recipes-instructions')
  } else {
    scrapeIngredients($, ingredients, 'li', 'ingredient')
    scrapeInstructions($, instructions, 'li', 'instruction')
  }
}
