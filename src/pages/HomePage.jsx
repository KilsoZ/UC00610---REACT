import {useState, useEffect} from "react";
import Navbar from "../components/Navbar.jsx";
import Spinner from "../components/Spinner.jsx";
import ErrorAlert from "../components/ErrorAlert.jsx";
import PsicologoList from "../components/PsicologoList.jsx";
import PsicologoMap from "../components/PsicologoMap.jsx";
import {getPsicologos} from "../services/psicologoService.js";

function HomePage() {
    const [psicologos, setPsicologos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("")
    const [selectedLocation, setSelectedLocation] = useState(null);

    useEffect(() => {
        async function fetchPsicologos() {
            try {
                setIsLoading(true);
                setError("")
                const data = await getPsicologos()
                setPsicologos(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false)
            }
        }

        fetchPsicologos();
    }, [])
    return (
        <>
            <Navbar/>
            {isLoading && <div className="container mt-4"><Spinner/></div>}
            {error && <div className="container mt-4"><ErrorAlert message={error}/></div>}
            {!isLoading && !error && (
                <>
                    <PsicologoMap psicologos={psicologos} selectedLocation={selectedLocation}/>
                    <div className="container mt-4">
                        <h1 className="mb-4">Encontra o teu Psicólogo</h1>
                        <PsicologoList psicologos={psicologos} onSelectPsicologo={setSelectedLocation}/>
                    </div>
                </>
            )}
        </>
    );
}

export default HomePage;