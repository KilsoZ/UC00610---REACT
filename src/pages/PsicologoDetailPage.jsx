import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Navbar from "../components/Navbar.jsx";
import Spinner from "../components/Spinner.jsx";
import ErrorAlert from "../components/ErrorAlert.jsx";
import {getPsicologoById} from "../services/psicologoService.js";
import { useNavigate } from 'react-router-dom';

function PsicologoDetailPage() {
    const {id} = useParams();
    const [psicologo, setPsicologo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchPsicologo() {
            try {
                setIsLoading(true);
                setError("")
                const data = await getPsicologoById(Number(id));
                setPsicologo(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false)
            }
        }

        fetchPsicologo()
    }, [id]);

    return (
        <>
            <Navbar/>
            <button className="btn btn-outline-secondary mt-3 ms-3" onClick={() => navigate(-1)}>
                ← Voltar
            </button>
            <div className="container mt-4">
                {isLoading && <Spinner/>}
                {error && <ErrorAlert message={error}/>}
                {!isLoading && !error && psicologo && (
                    <div className="row">
                        <div className="col-md-4">
                            <img
                                src={psicologo.foto}
                                alt={psicologo.nome}
                                className="img-fluid rounded"
                            />
                        </div>
                        <div className="col-md-8">
                            <h1>{psicologo.nome}</h1>
                            <p className="text-muted">{psicologo.especialidades[0].nome}</p>
                            <p>{psicologo.sobre_mim}</p>
                            <h5>Áreas de Intervenção</h5>
                            <p>{psicologo.areas_intervencao}</p>
                            <h5>Consultórios</h5>
                            {psicologo.consultorios.map((consultorio) => (
                                <div key={consultorio.id_consultorio} className="mb-2">
                                    <strong>{consultorio.nome}</strong>
                                    <p className="mb-0">{consultorio.endereco}</p>
                                    <span className="badge bg-primary">{consultorio.tipo}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default PsicologoDetailPage;