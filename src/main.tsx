import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import Cadastro from './pages/cadastro/index.tsx';
import Login from './pages/login/index.tsx';
import NovaDisciplina from './pages/disciplinas/newSubject/index.tsx';
import SubjectProfile from './pages/disciplinas/subjectProfile/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/disciplinas/nova-disciplina" element={<NovaDisciplina/>}/>
        <Route path='/disciplinas/perfil' element={<SubjectProfile />} />
      </Routes>
    </Router>
    
  </StrictMode>,
)
