import { IElement } from "../constants/interface";
import { MAX_INGREDIENTS } from "../constants/constants";
import { ElementCard } from "./ElementCard";
import { AvailableSlot } from "./AvailableSlot";

type ElementListProps = {
  elements: IElement[];
}

export const ElementList: React.FC<ElementListProps> = ({ elements: selectedElements }) => {
  const maxIngredients = MAX_INGREDIENTS;
  const emptySlots = maxIngredients - selectedElements.length;

  const CELL_WIDTH = typeof window === "undefined" || window.innerWidth > 600 ? 200 : window.innerWidth;

  return (
    <div className="flex flex-row lg:flex-col gap-4 flex-wrap">
      {selectedElements.map((element) => (
        <ElementCard key={element.atomic_number} element={element} width={CELL_WIDTH} height={80} />
      ))}

      {Array.from({ length: emptySlots }).map((_, idx) => (
        <AvailableSlot key={`empty-slot-${idx}`} width={CELL_WIDTH} height={80} />
      ))}
    </div>
  );
};
