"use client";

import { Recipe } from "@/types/recipe";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface RecipesProps {
  recipes: Recipe[];
}

export const Recipes = ({ recipes }: RecipesProps) => {
  const router = useRouter();

  if (!recipes.length) {
    return (
      <div className="flex h-screen w-full justify-center items-center">
        <p className="text-5xl text-white font-bold text-shadow">
          No results :(
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-row flex-wrap m-auto gap-4 items-stretch justify-center p-5 max-w-5xl">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="hover:cursor-pointer hover:opacity-80 flex flex-col gap-3 items-center bg-white max-w-96 shadow-md p-2 rounded-md"
          onClick={() => router.push(`/recipe/${recipe.id}`)}
        >
          <Image
            src={recipe.image}
            alt={`recipe-${recipe.title}`}
            width="300"
            height="300"
          />
          <p className="text-xl font-bold max-w-64">{recipe.title}</p>
        </div>
      ))}
    </div>
  );
};
