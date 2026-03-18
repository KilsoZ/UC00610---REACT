import {Link} from "react-router-dom";

function PsicologoCard({psicologo, onSelectPsicologo}) {
    console.log("onSelectPsicologo:", onSelectPsicologo);
    return (
        <div className="card h-100">
            <img
                //a URL da foto que vem do JSON
                src={psicologo.foto}
                //classe Bootstrap que arredonda os cantos superiores da imagem para encaixar no card
                className="card-img-top"
                //texto alternativo para acessibilidade, mostra o nome do psicólogo se a imagem não carregar
                alt={psicologo.nome}
                style={{height: '300px', objectFit: 'cover', objectPosition: 'top', cursor: 'pointer'}}
                onClick={() => {
                    const consultorioPresencial = psicologo.consultorios.find(c => c.tipo === 'PRESENCIAL');
                    if (consultorioPresencial) {
                        onSelectPsicologo({
                            latitude: consultorioPresencial.latitude,
                            longitude: consultorioPresencial.longitude
                        });
                    }

                }}
            />

            <div className="card-body">
                {/* card-body adiciona padding ao interior do card. car-title estiliza o titulo - nome do psicologo que vem do json */}
                <h5 className="card-title">
                    {psicologo.nome}
                </h5>
                {/* card-text Para texto dentro do card .. card muted para texto cinzento criando hierarquia
                - aceder ao primeiro elemento do array de especialidades do json*/}
                <p className="card-text text-muted">
                    {psicologo.especialidades[0].nome}
                </p>
                {/* ternário - se o tipo for PRESENCIAL mostra o endereço, senão mostra Sessões Online */}
                <p className="card-text">
                    {psicologo.consultorios[0].tipo === 'PRESENCIAL'
                        ? psicologo.consultorios[0].endereco
                        : 'Sessões Online'
                    }
                </p>
                {/* Constroi uma url dinamica - classe bootstrap para criar botão - texto do botºao */}
                <Link to={`/psicologo/${psicologo.id_psicologo}`}
                      className='btn btn-primary'>
                    Ver Perfil
                </Link>

            </div>

        </div>
    )
}

export default PsicologoCard