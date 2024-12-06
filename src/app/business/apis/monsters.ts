import { Element, Monster } from "@/app/constants/type";
import axios from "axios";

export const generateMonster = async (elements: Element[], signal?: AbortSignal): Promise<Monster> => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_MONSTER_GENERATOR_URL}/characters`, elements, { signal });
    return response.data;

    // await new Promise(r => setTimeout(r, 1000));

    // return {
    //     "name": "Agelium",
    //     "personality": "Mysterious and elusive",
    //     "highlight_feature": "Invisibility - can turn invisible at will",
    //     "image": "https://cdn.pixabay.com/photo/2024/03/03/20/44/cat-8611246_1280.jpg"
    // }
};