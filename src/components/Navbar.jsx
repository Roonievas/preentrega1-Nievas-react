
import Cartwidget from "./Cartwidget"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <nav className="hidden md:flex md:gap-5">
                <div className="items-center hidden md:flex md:gap-4">

                <a href="">Prodcutos</a>
                <Link to="/sucursales">Sucursales</Link>
                <Link to="/contacto">Contacto</Link>
               
                </div>

            </nav>
            <Cartwidget />


        </>
    )

}

export default Navbar
