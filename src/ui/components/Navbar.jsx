import { NavLink } from "react-router-dom"


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className='nav-link' to={'heroes'}>Heroes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' to={'comics'}>Comics</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' to={'series'}>Series</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' to={'historias'}>Historias</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' to={'search'}>Buscar</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
