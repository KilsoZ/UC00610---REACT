import PsicologoCard from "./PsicologoCard.jsx";

function PsicologoList({psicologos,onSelectPsicologo}){
    // row - cria linha no sistema de grelha
    // row-cols-1 - mobile mostra 1 card por linha
    // row-cols-md-3 - desktop mostra 3 cards por linha
    // g-4 - adiciona espaçamento entre os cards
    return (<div className="row row-cols-1 row-cols-md-3 g-4">
            {/* .map() percorre o array e para cada psicologo devolve JSX - equivalente a um for
                key é obrigatória em listas para o React saber qual elemento atualizar
                col é a classe Bootstrap que define cada coluna da grelha
                passamos o psicologo como prop ao PsicologoCard */}
            {psicologos.map((psicologo) =>(
                <div className="col" key={psicologo.id_psicologo}>
                    <PsicologoCard psicologo={psicologo} onSelectPsicologo={onSelectPsicologo} />
                </div>
            ))}
            </div>
)
}

export default PsicologoList