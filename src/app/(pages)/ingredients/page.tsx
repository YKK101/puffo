"use client";

import { usePeriodicTable } from "@/app/business/hooks/usePeriodicTable";
import { IngredientList } from "@/app/components/IngredientList";
import PeriodicTable from "@/app/components/PeriodicTable";
import { Element } from "@/app/constants/type";
import Button from "@/app/components/Button";
import { useStore } from "@tanstack/react-store";
import { addIngredient, ingredientStore, removeIngredient } from "@/app/business/stores/ingredients";
import { useRouter } from "next/navigation";

export default function Ingredients() {
  const router = useRouter();
  const pTable = usePeriodicTable();
  const ingredients = useStore(ingredientStore, (state) => state.ingredients);

  const handleSelect = (cell: Element) => {
    addIngredient(cell);
  }

  const handleDeselect = (elementToDeselect: Element) => {
    removeIngredient(elementToDeselect);
  };

  const handleMonsterMix = async () => {
    router.push("/monsters/create");
  }

  return (
    <div className="w-full h-full overflow-x-hidden overflow-y-auto py-12 px-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold">Select Ingredients</h1>
      <div className="w-full flex flex-col lg:flex-row mt-12 gap-8">
        <div className="w-full lg:w-[80%] overflow-x-auto">
          <PeriodicTable
            elements={pTable}
            selectedElements={ingredients}
            onSelectCell={handleSelect}
            onDeselectCell={handleDeselect}
          />
        </div>
        <div className="w-full lg:w-[20%] flex flex-col" >
          <IngredientList ingredients={ingredients} showEmptySlots />
          <Button className="mt-8" blog disabled={ingredients.length === 0} onClick={handleMonsterMix}>
            {ingredients.length === 0 ? "Add ingredients to continue" : "Mix!"}
          </Button>
        </div>
      </div>
    </div>
  );
}
