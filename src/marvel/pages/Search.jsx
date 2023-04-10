import { useEffect, useRef, useState } from "react";
import { getFetch } from "../data/getFetch";

export const Search = () => {

    const [search, setSearch] = useState('')
    const [error, setError] = useState(null)
    const [valor, setValor] = useState([])

    const inputValue = useRef(true);

    useEffect(() => {

        if (inputValue.current) {
            inputValue.current = search === '';
            return
        }

        if (search === '') {
            setError('Has una busqueda de un Personaje');
            return;
        };
        if (search.length <= 3) {
            setError('Ingrese mas palabras')
            return;
        }

        setError(null)

    }, [search]);

    const buscar = async () => {
        const data = await getFetch({ search });
        setValor(data)
    }

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        buscar();
    }

    return (
        <>
            <h1 className="text-center mt-2">Search</h1>
            <hr />

            <div className="row m-2">

                <div className="col-6">
                    <h4>Buscar</h4>
                    <hr />
                    <form className="d-flex gap-2" onSubmit={handleSubmit}>
                        <input
                            onChange={handleChange}
                            type="text"
                            placeholder="Buscar"
                            className="form-control mb-2"
                            autoComplete="off"
                            value={search}
                        />
                        <button className="btn btn-outline-primary">
                            Search
                        </button>
                    </form>
                    {
                        error && <div className="alert alert-danger mt-2">{error}</div>
                    }
                </div>

                <div className="col-6">
                    <h4>Resultados</h4>
                    <hr />
                    {/* Solo Characters */}

                    {
                        (search === '') ?
                            <div className="alert alert-primary">Realize una Busqueda de un Personaje</div>
                            :
                            valor.map(hero => (
                                <div key={hero.id} className="card" style={{ width: '25rem' }}>
                                    <img src={`${hero.img}.${hero.extension}`} alt={hero.name} className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">{hero.name}</h5>
                                    </div>
                                </div>
                            ))

                    }
                    {
                        (valor.length <= 0 && search !== '') && <div div className="alert alert-danger">No se encontró es busqueda</div>
                    }
                </div>
            </div >
        </>
    )
}
