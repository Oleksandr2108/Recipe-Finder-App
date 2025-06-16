import { useRouter } from "next/navigation";
import CustomInput from "./CustomInput";
import CustomSelectInput from "./CustomSelectInput";
import { useState } from "react";

const cuisines = [
  "African",
  "Asian",
  "American",
  "British",
  "Cajun",
  "Caribbean",
  "Chinese",
  "Eastern European",
  "European",
  "French",
  "German",
  "Greek",
  "Indian",
  "Irish",
  "Italian",
  "Japanese",
  "Jewish",
  "Korean",
  "Latin American",
  "Mediterranean",
  "Mexican",
  "Middle Eastern",
  "Nordic",
  "Southern",
  "Spanish",
  "Thai",
  "Vietnamese",
];

const FormFindRecipe = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [maxReadyTime, setMaxReadyTime] = useState("");

  const isFormValid = query.trim() || cuisine || maxReadyTime.trim();

  const options = [
    { label: "All", value: "" },
    ...cuisines.map((cuisine) => ({
      label: cuisine,
      value: cuisine.toLowerCase().replace(/\s+/g, "-"),
    })),
  ];

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (query.trim()) params.set("query", query.trim());
    if (cuisine) params.set("cuisine", cuisine);
    if (maxReadyTime.trim()) params.set("maxReadyTime", maxReadyTime.trim());

    router.push(`/recipes?${params.toString()}`);
  };
  return (
    <div className="max-w-2xl mx-auto mt-10">
      <div className="bg-white backdrop-blur-sm shadow-orange-950 shadow-2xl rounded-xl p-6 flex flex-col gap-3">
        <div>
          <label
            htmlFor="query"
            className="text-sm font-medium text-orange-500"
          >
            What do you want to cook?
          </label>
          <CustomInput
            type={"text"}
            placeholder={"e.g., pasta, chicken ..."}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            idInput={""}
            nameInput={""}
          />
        </div>
        <div>
          <label
            htmlFor="cuisine"
            className="text-sm font-medium text-orange-500"
          >
            Cuisine Type
          </label>
          <CustomSelectInput
            value={cuisine}
            onChange={(e) => setCuisine(e)}
            options={options}
          />
        </div>
        <div>
          <label
            htmlFor="cuisine"
            className="text-sm font-medium text-orange-500"
          >
            Maximum cooking time
          </label>
          <CustomInput
            type={"number"}
            placeholder={"e.g., 30"}
            value={maxReadyTime}
            onChange={(e) => setMaxReadyTime(e.target.value)}
            idInput={""}
            nameInput={""}
          />
        </div>
        <button
          onClick={handleSearch}
          disabled={!isFormValid}
          className="w-full h-12 text-base font-semibold bg-gradient-to-r from-orange-300 to-amber-200 hover:from-orange-400 hover:to-amber-400 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed cursor-pointer "
        >
          Search Recipes
        </button>
      </div>
    </div>
  );
};

export default FormFindRecipe;
