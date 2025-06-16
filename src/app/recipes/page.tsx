import Loading from "@/components/Loading";
import RecipesList from "@/components/RecipesResult";
import { Suspense } from "react";

export default function RecipesPage({
  searchParams,
}: {
  searchParams: Record<string, string | undefined>;
}) {
  return (
    <Suspense fallback={<Loading />}>
      <RecipesList searchParams={searchParams} />
    </Suspense>
  );
}
