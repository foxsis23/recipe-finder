import { Loading } from "@/components/loading/Loading";
import { RecipeDetail } from "@/components/recipe-detail-page/RecipeDetail";
import { getEnv } from "@/lib/utils/getEnv";
import { envNames } from "@/types/env";
import { Recipe } from "@/types/recipe";
import { Suspense } from "react";

interface RecipeDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function RecipeDetailPage({
  params,
}: RecipeDetailPageProps) {
  const { id } = await params;

  const recipeResponse = await fetch(
    `${getEnv(envNames.baseDevUrl)}/api/recipe/${id}`
  );

  const recipeData = (await recipeResponse.json()) as Recipe;

  return (
    <div className="p-2">
      <Suspense fallback={<Loading />}>
        <RecipeDetail recipe={recipeData} />
      </Suspense>
    </div>
  );
}
