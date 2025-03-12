import { getEnv } from "@/lib/utils/getEnv";
import { envNames } from "@/types/env";
import { RecipeData } from "@/types/recipe";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;

  const query = searchParams.get("query");
  const maxReadyTime = searchParams.get("maxReadyTime");
  const cuisine = searchParams.get("cuisine");

  const apiUrl = getEnv(envNames.apiUrl);
  const apiKey = getEnv(envNames.apiKey);

  const fetchUrl = new URL(apiUrl + "complexSearch");

  if (apiKey) fetchUrl.searchParams.set("apiKey", apiKey);
  if (query) fetchUrl.searchParams.set("query", query);
  if (maxReadyTime) fetchUrl.searchParams.set("maxReadyTime", maxReadyTime);
  if (cuisine) fetchUrl.searchParams.set("cuisine", cuisine);

  const res = await fetch(fetchUrl.toString());

  if (!res.ok) {
    throw new Error("Api request failed");
  }

  const recipeData = (await res.json()) as RecipeData;

  return NextResponse.json(recipeData.results);
}
