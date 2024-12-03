import { Element } from "../constants/type";
import { MAX_INGREDIENTS } from "../constants/constants";
import { ElementCard } from "./ElementCard";
import { AvailableSlot } from "./AvailableSlot";

type ElementListProps = {
  elements: Element[];
}

export const ElementList: React.FC<ElementListProps> = ({ elements: selectedElements }) => {
  const maxIngredients = MAX_INGREDIENTS;
  const emptySlots = maxIngredients - selectedElements.length;

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
      {selectedElements.map((element) => (
        <ElementCard key={element.atomic_number} element={element} height={80} />
      ))}

      {Array.from({ length: emptySlots }).map((_, idx) => (
        <AvailableSlot key={`empty-slot-${idx}`} height={80} />
      ))}
    </div>
  );
};
