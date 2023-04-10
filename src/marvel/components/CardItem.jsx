import { Link } from "react-router-dom"

export const CardItem = ({ img, extension, name }) => {



    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={`${img}.${extension}`} className="card-img-top w" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
            </div>
        </div>
    )
}
