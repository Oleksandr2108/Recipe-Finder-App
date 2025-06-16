"use client";

import FormFindRecipe from "@/components/FormFindRecipe";

const SearchPage = () => {
  return (
    <div className="min-h-screen  flex flex-col justify-center">
      <div className="text-center">
        <h1 className="text-orange-500 text-4xl font-bold mb-6">
          Recipe Finder
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed ">
          Discover delicious recipes tailored to your taste. Search by
          ingredients cuisine, or cooking time to find your next culinary
          adventure
        </p>
      </div>

      <FormFindRecipe />
    </div>
  );
};

export default SearchPage;
