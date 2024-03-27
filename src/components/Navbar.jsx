
import Cartwidget from "./Cartwidget"


function Navbar() {
    return (
        <>
            <nav className="hidden md:flex md:gap-5">


                <a href="">Productos</a>
                <a href="">Sucursales</a>
                <a href="">Contacto</a>
            </nav>
            <Cartwidget />
          

        </>
    )

}

export default Navbar
