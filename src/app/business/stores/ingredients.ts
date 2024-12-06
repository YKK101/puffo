import { Element } from "@/app/constants/type";
import { Store } from "@tanstack/react-store";

export const ingredientStore = new Store<{
    ingredients: Element[];
}>({
    ingredients: [],
})

export const addIngredient = (ingredient: Element) => {
    ingredientStore.setState((state) => ({
        ingredients: [...state.ingredients, ingredient],
    }));
}

export const removeIngredient = (ingredientToRemove: Element) => {
    ingredientStore.setState((state) => ({
        ingredients: state.ingredients.filter(
            (ingredient) => ingredient !== ingredientToRemove
        ),
    }));
};
