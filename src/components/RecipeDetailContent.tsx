import { Recipe } from "@/types/recipe";

import Image from "next/image";
import BackArrow from "./BackArrow";

async function fetchRecipeDetails(id: string): Promise<Recipe> {
  const apiKey = process.env.SPOONACULAR_API_KEY;

  const res = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch recipe details : ${res.status}`);
  }

  const data = await res.json();
  return data;
}

interface RecipeDetailContentProps {
  id: string;
}

export default async function RecipeDetailContent({
  id,
}: RecipeDetailContentProps) {
  const recipe = await fetchRecipeDetails(id.toString());
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <BackArrow
        path="/recipes"
        text="Back to Recipes"
      />

      <h1 className="text-4xl font-bold text-orange-500 mb-6">
        {recipe.title}
      </h1>

      <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-8">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex items-center space-x-3">
          <div>
            <p className="text-sm text-gray-600">Ready in</p>
            <p className="font-semibold text-orange-900">
              {recipe.readyInMinutes} minutes
            </p>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex items-center space-x-3">
          <div>
            <p className="text-sm text-gray-600">Servings</p>
            <p className="font-semibold text-orange-900">
              {recipe.servings} people
            </p>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex items-center space-x-3">
          <div>
            <p className="text-sm text-gray-600">Cuisine</p>
            <p className="font-semibold text-orange-900">
              {recipe.cuisines?.join(", ") || "Various"}
            </p>
          </div>
        </div>
      </div>
      {recipe.summary && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">Summary</h2>
          <div className="bg-white border border-orange-200 rounded-lg p-6">
            <div
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: recipe.summary.replace(/<[^>]*>/g, ""),
              }}
            />
          </div>
        </div>
      )}

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-orange-500 mb-4">Ingredients</h2>
        <div className="bg-white border border-orange-200 rounded-lg p-6">
          <ul className="space-y-3">
            {recipe.extendedIngredients?.map((ingredient) => (
              <li
                key={ingredient.id}
                className="flex items-start space-x-3 pb-2 border-b border-gray-100 last:border-b-0"
              >
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-orange-600 text-xs font-semibold">
                    {ingredient.amount}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 font-medium">
                    {ingredient.original}
                  </p>
                  <p className="text-sm text-gray-600">{ingredient.name}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-orange-500 mb-4">Instructions</h2>
      <div className="bg-white border border-orange-200 rounded-lg p-6">
        {recipe.analyzedInstructions.map((item) => (
          <div key={item.name}>
            <ul>
              {item.steps.map((step) => (
                <li
                  key={step.step}
                  className="flex items-start space-x-3 pb-2 border-b border-gray-100 last:border-b-0"
                >
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-600 text-xs font-semibold">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium">{step.step}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
