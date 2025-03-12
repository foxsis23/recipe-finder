import { getEnv } from "@/lib/utils/getEnv";
import { envNames } from "@/types/env";
import { Recipe } from "@/types/recipe";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const apiUrl = getEnv(envNames.apiUrl);
  const apiKey = getEnv(envNames.apiKey);

  const fetchUrl = new URL(`${apiUrl}${id}/information`);

  if (apiKey) fetchUrl.searchParams.set("apiKey", apiKey);

  const res = await fetch(fetchUrl.toString());

  if (!res.ok) {
    throw new Error("Api request failed");
  }

  const recipeData = (await res.json()) as Recipe;

  return NextResponse.json(recipeData);
}
