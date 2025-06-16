import { RecipeCard } from "@/components/RecipeCard";
import { Recipe } from "@/types/recipe";
import BackArrow from "./BackArrow";

export const dynamic = "force-dynamic";
export const revalidate = 60;

async function fetchRecipes(
  query: string,
  cuisine: string,
  maxReadyTime: string
): Promise<Recipe[]> {
  const apiKey = process.env.SPOONACULAR_API_KEY;

  const searchParams = new URLSearchParams();
  if (query) searchParams.set("query", query);
  if (cuisine) searchParams.set("cuisine", cuisine);
  if (maxReadyTime) searchParams.set("maxReadyTime", maxReadyTime);

  searchParams.set("number", "12");
  searchParams.set("apiKey", apiKey ?? "");

  const res = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?${searchParams.toString()}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch recipes");

  const data = await res.json();
  return data.results;
}

export default async function RecipesList({
  searchParams,
}: {
  searchParams: Record<string, string | undefined>;
}) {
  const query = searchParams.query ?? "";
  const cuisine = searchParams.cuisine ?? "";
  const maxReadyTime = searchParams.maxReadyTime ?? "";
  const recipes = await fetchRecipes(query, cuisine, maxReadyTime);

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <BackArrow
        path="/"
        text="New Search"
      />

      <h1 className="text-3xl font-bold text-orange-500 mb-6">
        Search Results
      </h1>

      {recipes.length === 0 ? (
        <p className="text-gray-500">
          No recipes found for your search criteria.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
            />
          ))}
        </div>
      )}
    </main>
  );
}
