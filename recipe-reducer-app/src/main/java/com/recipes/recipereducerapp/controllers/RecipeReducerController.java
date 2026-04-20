package com.recipes.recipereducerapp.controllers;

import com.recipes.recipereducerapp.domain.recipe.RecipeDTO;
import com.recipes.recipereducerapp.services.RecipeReducerService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/reducer")
@RequiredArgsConstructor
public class RecipeReducerController {

	private final RecipeReducerService recipeReducerService;

	@PostMapping
	@ResponseBody
	public RecipeDTO reduceRecipeHtml(@RequestBody String recipeUrl) {
		return recipeReducerService.reduceRecipe(recipeUrl);
	}
}
