"use client";

import { ingredientStore } from "@/app/business/stores/ingredients";
import { IngredientList } from "@/app/components/IngredientList";
import { useQuery } from "@tanstack/react-query";
import { useStore } from "@tanstack/react-store";
import { generateMonster } from "@/app/business/apis/monsters";
import MonsterPresenter from "@/app/components/MonsterPresenter";

export default function CreateMonsters() {
    const ingredients = useStore(ingredientStore, (state) => state.ingredients);

    const { data: monster, isPending } = useQuery({
        queryFn: ({ signal }) => generateMonster(ingredients, signal),
        queryKey: ["generate-monster", ...ingredients.map((ingredient) => ingredient.element_symbol)],
        enabled: ingredients.length > 0,
    });

    return (
        <div className="w-full h-full flex flex-col lg:flex-row overflow-y-auto gap-8 px-4 py-8">
            <div className="card flex-[2] min-h-[500px]">
                {isPending && <div className="w-full h-full flex items-center justify-center">Generating...</div>}
                {monster && <MonsterPresenter monster={monster} />}
            </div>

            <div className="flex-none lg:flex-[1]">
                <IngredientList ingredients={ingredients} />
            </div>
        </div>
    );
}