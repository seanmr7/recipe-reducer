package com.recipes.recipereducerapp.services;

import com.recipes.recipereducerapp.domain.recipe.RecipeDTO;

public interface RecipeReducerService {

	public RecipeDTO reduceRecipe(String recipeUrl);
}
