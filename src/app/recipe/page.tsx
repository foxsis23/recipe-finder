import { Loading } from "@/components/loading/Loading";
import { Recipes } from "@/components/recipes-page/Recipes";
import { getEnv } from "@/lib/utils/getEnv";
import { envNames } from "@/types/env";
import { Recipe } from "@/types/recipe";
import { Suspense } from "react";

interface RecipePageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function RecipePage({ searchParams }: RecipePageProps) {
  const queryParams = await searchParams;
  const recipesResponse = await fetch(
    `${getEnv(envNames.baseDevUrl)}/api/recipe?query=${queryParams.query ?? "pasta"}&maxReadyTime=${queryParams.maxReadyTime ?? "60"}&cuisine=${queryParams.cuisine ?? "italian"}`,
    { cache: "force-cache", next: { revalidate: 60 } }
  );
  const recipesData = (await recipesResponse.json()) as Recipe[];

  return (
    <Suspense fallback={<Loading />}>
      <Recipes recipes={recipesData} />
    </Suspense>
  );
}
