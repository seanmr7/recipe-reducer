package com.recipes.recipereducerapp.services;

import com.recipes.recipereducerapp.domain.recipe.RecipeDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
@RequiredArgsConstructor
public class RecipeReducerServiceImpl implements RecipeReducerService {

	@Override
	public RecipeDTO reduceRecipe(String recipeUrl) {
		ArrayList<String> instructions = new ArrayList<>();
		instructions.add("step 1: chop");
		instructions.add("step 2: season");
		instructions.add("step 3: cook");
		instructions.add("step 4: serve");
		ArrayList<String> ingredients = new ArrayList<>();
		ingredients.add("garlic");
		ingredients.add("salt");
		ingredients.add("pepper");
		ingredients.add("chicken");
		return new RecipeDTO("spicy chicken", recipeUrl, "spice", ingredients, instructions);
	}
}
