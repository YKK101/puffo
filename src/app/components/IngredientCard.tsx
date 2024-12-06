import { groupColors, statusIcons } from "../constants/constants";
import { Element } from "../constants/type";

type IngredientCardProps = {
    ingredient: Element;
    width?: number;
    height?: number;
};

export const IngredientCard: React.FC<IngredientCardProps> = ({ ingredient, width, height }) => {
    return (
        <div className="card px-4 py-8" style={{ width, height }}>
            <div className="absolute top-2 right-2 flex items-center justify-end gap-2">
                <div className="text-[12px] text-right">{ingredient.group}</div>
                <span className="material-icons element-card-icon">{statusIcons[ingredient.status]}</span>
            </div>
            <div className="flex align-middle items-center gap-4">
                <div
                    className="periodic-table-symbol-text font-bold"
                    style={{
                        backgroundImage: `linear-gradient(to bottom, var(--foreground) 10%, ${groupColors[ingredient.group]} 50%)`,
                    }}
                >
                    {ingredient.element_symbol}
                </div>
                <div className="text-md">{ingredient.element_name}</div>
            </div>
        </div>
    );
};

