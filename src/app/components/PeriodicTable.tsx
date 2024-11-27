"use client"
import { IElement } from "@/app/constants/interface";
import { groupColors, MAX_INGREDIENTS } from "../constants/constants";

type PeriodicTableCellProps = {
    cell: IElement | null;
    selected?: boolean;
    selectable?: boolean;
    onChanged?: (cell: IElement) => void;
};

const PeriodicTableCell: React.FC<PeriodicTableCellProps> = ({ cell, selected, selectable, onChanged }) => {
    if (!cell) { return null; }

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();

        if (!selectable && !selected) {
            const element = document.getElementById(cell.atomic_number.toString());
            if (!element) { return; }
            element.classList.add('exceeded');
            setTimeout(() => {
                element.classList.remove('exceeded');
            }, 250);
        } else {
            onChanged?.call(self, cell);
        }
    };

    return (
        <div
            id={cell.atomic_number.toString()}
            className={`periodic-table-cell ${selected ? 'periodic-table-cell-selected' : ''} px-[4px]`
            }
            onClick={handleClick}
        >
            <div className="text-right text-sm">{cell.atomic_number}</div>
            <div
                className="text-center periodic-table-symbol-text"
                style={{
                    backgroundImage: `linear-gradient(to bottom, var(--foreground) 10%, ${groupColors[cell.group]} 50%)`,
                }}
            >
                {cell.element_symbol}
            </div>
        </div >
    );
};

type PeriodicTableProps = {
    elements: (IElement | null)[][];
    selectedElements: IElement[];
    onSelectCell: (cell: IElement) => void;
    onDeselectCell: (cell: IElement) => void;
};

const PeriodicTable: React.FC<PeriodicTableProps> = ({ elements, selectedElements, onSelectCell, onDeselectCell }) => {
    const handleToggle = (cell: IElement) => {
        if (selectedElements.includes(cell)) {
            onDeselectCell(cell);
        } else {
            onSelectCell(cell);
        }
    };

    return (
        <table className="table-fixed border-separate border-spacing-2 lg:w-full">
            <tbody>
                {elements.map((row: (IElement | null)[], ridx: number) => (
                    <tr key={`row-${ridx}`}>
                        {row.map((cell: (IElement | null), cidx: number) => (
                            <td key={`cell-${cidx}`} className="h-8 xl:h-[50px]">
                                <PeriodicTableCell
                                    key={`cell-${ridx}-${cidx}`}
                                    cell={cell}
                                    selectable={selectedElements.length < MAX_INGREDIENTS}
                                    selected={cell ? selectedElements.includes(cell) : false}
                                    onChanged={handleToggle}
                                />
                            </td>

                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default PeriodicTable;

