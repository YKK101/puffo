import { Monster } from "../constants/type";
import Image from "next/image";

type MonsterPresenterProps = {
    monster: Monster;
}

const MonsterPresenter = ({ monster }: MonsterPresenterProps) => {
    return (
        <div className="w-full h-full flex flex-col">
            <div className="relative flex-[1]">
                <Image
                    src={monster?.image}
                    alt={monster?.name}
                    fill
                    layout="fill"
                    objectFit="cover"
                    className="w-full object-cover p-8"
                />
            </div>
            <div className="flex flex-col flex-none p-4">
                <div
                    className="text-gradient text-3xl font-bold"
                    style={{
                        backgroundImage: "linear-gradient(175deg, var(--foreground) 20%, black 80%)",
                    }}
                >
                    {monster.name}
                </div>
                <div className="mt-4 text-lg"><span className="font-semibold">Personality:</span> {monster.personality}</div>
                <div className="mt-4 text-lg"><span className="font-semibold">Highlight Feature:</span> {monster.highlight_feature}</div>
            </div>
        </div>
    )
}

export default MonsterPresenter;