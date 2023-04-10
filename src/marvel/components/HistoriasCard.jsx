import { useMemo } from "react";
import { getHistorias } from "../helpers/getHistorias";

export const HistoriasCard = () => {
    const historias = useMemo(() => getHistorias(), []);

    return (
        <div className="container contenedor mt-3 mb-3">
            {
                historias.map(historia => (
                    <div className="card" key={historia.id} style={{ width: '18rem' }}>
                        <img src='/assets/img/not-found.png' alt={historia.name} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{historia.name}</h5>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

