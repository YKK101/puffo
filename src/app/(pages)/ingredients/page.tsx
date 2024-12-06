"use client";

import { usePeriodicTable } from "@/app/business/hooks/usePeriodicTable";
import { useMonsterGenerator } from "@/app/business/hooks/useMonsterGenerator";
import { ElementList } from "@/app/components/ElementList";
import PeriodicTable from "@/app/components/PeriodicTable";
import { Element } from "@/app/constants/type";
import { useState } from "react";
import Button from "@/app/components/Button";
import Modal from "@/app/components/Modal";
import Image from "next/image";

export default function Ingredients() {
  const pTable = usePeriodicTable();
  const { generateMonster } = useMonsterGenerator();
  const [selectedElements, setSelectedElements] = useState<Element[]>([]);
  const [generatedMonsterImage, setGeneratedMonsterImage] = useState<string | null>(null); // FIXME: MOVE TO NEW PAGE

  const handleSelect = (cell: Element) => {
    setSelectedElements([...selectedElements, cell]);
  }

  const handleDeselect = (elementToDeselect: Element) => {
    setSelectedElements(
      selectedElements.filter((selectedElement) => selectedElement !== elementToDeselect)
    );
  };

  // FIXME: MOVE TO NEW PAGE
  const handleMonsterMix = async () => {
    const res = await generateMonster(selectedElements);
    setGeneratedMonsterImage(res.image);
  }

  return (
    <div className="relative">
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
          <div className="w-full lg:w-[20%] flex flex-col" >
            <ElementList elements={selectedElements} />
            <Button className="mt-8" blog disabled={selectedElements.length === 0} onClick={handleMonsterMix}>
              {selectedElements.length === 0 ? "Add ingredients to continue" : "Mix!"}
            </Button>
          </div>
        </div>
      </div>
      <Modal isShow={generatedMonsterImage !== null} onClose={() => setGeneratedMonsterImage(null)}>
        <Image
          className="w-[260px] rounded-lg"
          src={generatedMonsterImage || ""}
          alt="Generated Monster"
          width={260}
          height={260}
        />
      </Modal>
    </div>
  );
}
