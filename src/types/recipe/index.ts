export interface RecipeData {
  results: Recipe[];
}

export interface Recipe {
  id: string;
  title: string;
  image: string;
  extendedIngredients: Ingredient[];
}

interface Ingredient {
  id: string;
  name: string;
}
