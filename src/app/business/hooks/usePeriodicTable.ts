import { useMemo } from 'react';
import { IElement } from "@/app/constants/interface";
import { ptableElements } from "@/app/constants/ptableElements";

export const usePeriodicTable = () => {
    const ptable: (IElement | null)[][] = useMemo(() => {
        const rowObj: { [key: number]: (IElement | null)[] } = {};
        for (let i = 0; i < 10; i++) {
            rowObj[i] = Array(18).fill(null);
        }
        ptableElements.forEach((element) => {
            const [row, col] = element.grid_location;
            rowObj[row][col] = element;
        });
        return Object.values(rowObj);
    }, []);

    return ptable;
};
