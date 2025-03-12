import { Recipe } from "@/types/recipe";
import Image from "next/image";

interface RecipeDetailProps {
  recipe: Recipe;
}

export const RecipeDetail = ({ recipe }: RecipeDetailProps) => {
  return (
    <div className="flex flex-col justify-center items-center max-w-2xl w-full mx-auto mt-20 bg-white rounded-lg shadow-xl p-6 space-y-6">
      <Image
        src={recipe.image}
        alt={`recipe-${recipe.title}`}
        width="400"
        height="400"
        className="rounded-lg shadow-md object-cover"
      />
      <h1 className="text-3xl font-semibold text-gray-800">{recipe.title}</h1>
      <p className="text-xl text-gray-700">Ingredients:</p>
      <ul className="flex flex-col gap-2 text-lg text-gray-600">
        {recipe.extendedIngredients.map((ingredient) => (
          <li
            key={ingredient.id}
            className="flex items-center gap-2 p-2 border-b border-gray-200 hover:bg-gray-100 rounded-md"
          >
            <span>{ingredient.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
