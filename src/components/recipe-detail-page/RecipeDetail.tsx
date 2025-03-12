import { Recipe } from "@/types/recipe";
import Image from "next/image";

interface RecipeDetailProps {
  recipe: Recipe;
}

export const RecipeDetail = ({ recipe }: RecipeDetailProps) => {
  return (
    <div className="flex flex-col justify-center items-center max-w-xl w-full mx-auto mt-20 bg-white rounded-md shadow-md p-4">
      <Image
        src={recipe.image}
        alt={`recipe-${recipe.title}`}
        width="300"
        height="300"
      />
      <h1 className="text-2xl font-bold">{recipe.title}</h1>
      <p className="text-xl self-start">Ingredients:</p>
      <ul className="flex flex-col gap-2 self-start">
        {recipe.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.name}</li>
        ))}
      </ul>
    </div>
  );
};
