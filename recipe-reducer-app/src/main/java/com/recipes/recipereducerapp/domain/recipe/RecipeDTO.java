package com.recipes.recipereducerapp.domain.recipe;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RecipeDTO {
	String name;
	String url;
	String description;
	List<String> ingredients;
	List<String> instructions;
}
