import { useMemo } from "react";
import { getSeries } from "../helpers/getSeries"

export const SeriesCard = () => {

    const series = useMemo(() => getSeries(), []);

    return (
        <div className="container contenedor mt-3 mb-3">
            {
                series.map(serie => (
                    <div key={serie.id} className="card" style={{ width: '18rem' }}>
                        <img src={`${serie.img}.${serie.extension}`} alt={serie.name} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{serie.name}</h5>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
