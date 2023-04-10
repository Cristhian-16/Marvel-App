import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import { Heroes, Comics, Series, Historias, Search } from "../marvel/pages"
import { MarvelPrince } from "../marvel/routes"

const routes = createBrowserRouter([
    {
        path: '/*',
        element: <MarvelPrince />,
        children: [
            {
                path: 'heroes',
                element: <Heroes />
            },
            {
                path: 'comics',
                element: <Comics />
            },
            {
                path: 'series',
                element: <Series />
            },
            {
                path: 'historias',
                element: <Historias />
            },
            {
                path: 'search',
                element: <Search />,
            },
            {
                path: '/*',
                element: <Navigate to={'heroes'} />
            }
        ]
    }
])

export const AppRoute = () => {
    return (
        <>
            <RouterProvider router={routes} />
        </>
    )
}
