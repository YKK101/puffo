import { Element } from "../constants/type";
import { MAX_INGREDIENTS } from "../constants/constants";
import { IngredientCard } from "./IngredientCard";
import { AvailableSlot } from "./AvailableSlot";

type IngredientListProps = {
  ingredients: Element[];
  showEmptySlots?: boolean;
}

export const IngredientList: React.FC<IngredientListProps> = ({ ingredients: selectedIngredients, showEmptySlots = false }) => {
  const maxIngredients = MAX_INGREDIENTS;
  const emptySlots = maxIngredients - selectedIngredients.length;

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
      {selectedIngredients.map((ingredient) => (
        <IngredientCard key={ingredient.atomic_number} ingredient={ingredient} height={80} />
      ))}

      {showEmptySlots && Array.from({ length: emptySlots }).map((_, idx) => (
        <AvailableSlot key={`empty-slot-${idx}`} height={80} />
      ))}
    </div>
  );
};

