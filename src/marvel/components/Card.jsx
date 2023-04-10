import { useMemo } from "react";
import { getCharacter } from "../helpers/getCharacter"
import { CardItem } from "./CardItem";

export const Card = () => {

    const heroes = useMemo(() => getCharacter(), []);

    return (
        <div className="container contenedor mt-4 mb-3">
            {
                heroes.map(hero => (
                    <CardItem key={hero.id} {...hero} />
                ))
            }
        </div>
    )
}
