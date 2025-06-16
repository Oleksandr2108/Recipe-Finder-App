import { Recipe } from "@/types/recipe";
import Image from "next/image";
import Link from "next/link";

interface Props {
  recipe: Recipe;
}
export const RecipeCard: React.FC<Props> = ({ recipe }) => {
  return (
    <Link href={`recipes/${recipe.id}`}>
      <div className="rounded-xl shadow-md border border-orange-300 bg-white h-[300px]">
        <Image
          src={recipe.image}
          alt={recipe.title}
          width={400}
          height={300}
          className="w-full h-48 object-cover rounded-t-xl"
        />
        <div className="w-full p-2 text-center">
          <h3 className="text-orange-800 text-lg my-2">{recipe.title}</h3>
          
        </div>
      </div>
    </Link>
  );
};
