import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import Cadastro from './pages/cadastro/index.tsx';
import Login from './pages/login/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
    
  </StrictMode>,
)
