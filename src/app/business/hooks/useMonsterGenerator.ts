import axios from "axios";
import type { Element } from "@/app/constants/type";

export const useMonsterGenerator = () => {
    const generateMonster = async (elements: Element[]) => {
        // try {
        //     const response = await axios.post(`${process.env.NEXT_PUBLIC_MONSTER_GENERATOR_URL}/characters`, elements);
        //     return response.data;
        // } catch (error) {
        //     console.error('Error creating character:', error);
        // }

        return {
            "name": "Agelium",
            "personality": "Mysterious and elusive",
            "highlight_feature": "Invisibility - can turn invisible at will",
            "image": "https://cdn.pixabay.com/photo/2024/03/03/20/44/cat-8611246_1280.jpg"
        }
    };

    return {
        generateMonster,
    };
};