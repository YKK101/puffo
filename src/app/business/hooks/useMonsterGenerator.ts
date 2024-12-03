import axios from "axios";
import type { Element } from "@/app/constants/type";

export const useMonsterGenerator = () => {
    const generateMonster = async (elements: Element[]) => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_MONSTER_GENERATOR_URL}/characters`, elements);
            return response.data;
        } catch (error) {
            console.error('Error creating character:', error);
        }

        // return {
        //     "name": "Agelium",
        //     "personality": "Mysterious and elusive",
        //     "highlight_feature": "Invisibility - can turn invisible at will",
        //     "image": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-4flLfxyC6deONQBkcUqsMZ7g/user-I0eJqpxTkhuVyhXfDPQu2xs3/img-oeYcL1qkqZPvZydXMl0F9Pvp.png?st=2024-12-03T07%3A09%3A12Z&se=2024-12-03T09%3A09%3A12Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-12-03T01%3A06%3A50Z&ske=2024-12-04T01%3A06%3A50Z&sks=b&skv=2024-08-04&sig=ZeUUFryg3ic4CWZtvUmcfZlZV41YxoTCmawF6djDnOE%3D"
        // }
    };

    return {
        generateMonster,
    };
};