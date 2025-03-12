"use client";

import { dropdownOptions } from "@/constants/dropdown";
import { useRouter, useSearchParams } from "next/navigation";
import { FC, useEffect, useState } from "react";

export const SearchForm: FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [selectedCuisineOption, setSelectedCuisineOption] = useState("");
  const [query, setQuery] = useState("");
  const [preparationTime, setPreparationTime] = useState("");

  const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);

  useEffect(() => {
    if (selectedCuisineOption || query || preparationTime)
      setIsReadyToSubmit(true);
    else setIsReadyToSubmit(false);
  }, [preparationTime, query, selectedCuisineOption]);

  const onSubmit = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (query) params.set("query", query);
    if (preparationTime) params.set("maxReadyTime", preparationTime);
    if (selectedCuisineOption) params.set("cuisine", selectedCuisineOption);

    router.push(`/recipe?${params.toString()}`);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="flex flex-col gap-4 items-center"
    >
      <div className="flex flex-row gap-3 items-center justify-center w-full flex-wrap">
        <input
          type="text"
          placeholder="Pasta..."
          className="w-full sm:w-fit py-3 px-4 rounded-md text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 bg-gray-100 placeholder-gray-500"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input
          type="number"
          min="5"
          placeholder="Preparation time: 60"
          className="w-full sm:w-fit py-3 px-4 rounded-md text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 bg-gray-100 placeholder-gray-500"
          value={preparationTime}
          onChange={(e) => setPreparationTime(e.target.value)}
        />
        <select
          value={selectedCuisineOption}
          onChange={(e) => setSelectedCuisineOption(e.target.value)}
          className="sm:h-full w-full sm:w-fit cursor-pointer py-3 px-4 rounded-md text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 bg-gray-100"
        >
          <option value="" disabled>
            Select Cuisine
          </option>
          {dropdownOptions.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="disabled:opacity-70 disabled:pointer-events-none w-full py-3 px-4 rounded-md bg-green-500 text-white text-lg font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        disabled={!isReadyToSubmit}
      >
        Next
      </button>
    </form>
  );
};
