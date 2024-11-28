"use client";

import { usePeriodicTable } from "@/app/business/hooks/usePeriodicTable";
import { ElementList } from "@/app/components/ElementList";
import PeriodicTable from "@/app/components/PeriodicTable";
import { Element } from "@/app/constants/type";
import { useState } from "react";

export default function Ingredients() {
  const pTable = usePeriodicTable();
  const [selectedElements, setSelectedElements] = useState<Element[]>([]);

  const handleSelect = (cell: Element) => {
    setSelectedElements([...selectedElements, cell]);
  }

  const handleDeselect = (elementToDeselect: Element) => {
    setSelectedElements(
      selectedElements.filter((selectedElement) => selectedElement !== elementToDeselect)
    );
  };

  return (
    <div className="w-full h-full overflow-x-hidden overflow-y-auto py-12 px-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold">Select Ingredients</h1>
      <div className="w-full flex flex-col lg:flex-row mt-12 gap-8">
        <div className="w-full lg:w-[80%] overflow-x-auto">
          <PeriodicTable
            elements={pTable}
            selectedElements={selectedElements}
            onSelectCell={handleSelect}
            onDeselectCell={handleDeselect}
          />
        </div>
        <ElementList elements={selectedElements} />
      </div>
    </div>
  );
}
