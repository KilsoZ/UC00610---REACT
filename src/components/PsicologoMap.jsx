import Map, { Marker, Popup } from "react-map-gl";

// Map - componente principal, Marker - pin no mapa, Popup - janela ao clicar no marker
import { useState, useRef, useEffect } from "react";
import 'mapbox-gl/dist/mapbox-gl.css';

// CSS obrigatório do Mapbox, sem isto o mapa fica partido

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN
// token do .env, nunca hardcoded para não expor no GitHub

function PsicologoMap({ psicologos, selectedLocation}){
    const mapRef = useRef(null);
    const [popupInfo, setPopupInfo] = useState(null);
    // null = nenhum popup visível, consultorio = popup desse consultorio visível

    useEffect(() => {
        if (selectedLocation && mapRef.current) {
            mapRef.current.flyTo({
                center: [selectedLocation.longitude, selectedLocation.latitude],
                zoom: 14,
                duration: 1500
            });
        }
    }, [selectedLocation]);
    return (
        <Map
            ref={mapRef}
            initialViewState={{
                longitude: -9.1393,
                latitude: 38.7223,
                zoom: 8 // 8 = zoom suficiente para ver Portugal central
            }}
            style={{ width: '100%', height: '650px'}}
            mapStyle="mapbox://styles/mapbox/streets-v11" // tema visual de ruas do Mapbox
            mapboxAccessToken={MAPBOX_TOKEN}
        >
            {/* flatMap achata o array de arrays de consultorios num array único de markers
                filter remove os online pois não têm coordenadas */}
            {psicologos.flatMap((psicologo) =>
                psicologo.consultorios
                    .filter((c) => c.tipo === 'PRESENCIAL')
                    .map((consultorio) => (
                        <Marker
                            key={consultorio.id_consultorio}
                            longitude={consultorio.longitude}
                            latitude={consultorio.latitude}
                            onClick={() => setPopupInfo({ ...consultorio, nomePsicologo: psicologo.nome})} // guarda consultorio clicado
                        />
                    ))
            )}
            {/* só renderiza o Popup se popupInfo não for null */}
            {popupInfo && (
                <Popup
                    longitude={popupInfo.longitude}
                    latitude={popupInfo.latitude}
                    onClose={() => setPopupInfo(null)} // fecha o popup voltando a null
                    closeOnClick={false} // impede fechar ao clicar dentro do popup
                >
                    <p>{popupInfo.nome}</p>
                    <p><strong>{popupInfo.nomePsicologo}</strong></p>
                    <p>{popupInfo.endereco}</p>
                </Popup>
            )}
        </Map>
    )
}

export default PsicologoMap;