import { useMemo } from "react";
import { getComics } from "../helpers/getComics"

export const ComicCard = () => {


    const comics = useMemo(() => getComics(), []);

    return (
        <div className="container contenedor mt-3 mb-3">
            {
                comics.map(comic => (
                    <div className="card" key={comic.id} style={{ width: '18rem' }}>
                        <img src={`${comic.img}.${comic.extension}`} alt={comic.name} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{comic.name}</h5>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
