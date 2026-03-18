import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import PsicologoDetailPage from './pages/PsicologoDetailPage.jsx'

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/psicologo/:id" element={<PsicologoDetailPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;