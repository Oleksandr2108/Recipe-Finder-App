import Loading from "@/components/Loading";
import RecipeDetailContent from "@/components/RecipeDetailContent";
import { Suspense } from "react";

export default function RecipeDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <Suspense fallback={<Loading />}>
      <RecipeDetailContent id={params.id} />
    </Suspense>
  );
}
