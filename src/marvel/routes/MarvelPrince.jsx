import { Outlet } from "react-router-dom"
import { Navbar } from "../../ui/components"


export const MarvelPrince = () => {
    return (
        <>
            <Navbar />

            <Outlet />
        </>
    )
}
