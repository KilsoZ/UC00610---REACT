//Importar o Link que é equivalente ao A href do html mas que navega sem recarregar a página
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    PsyFlow
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;