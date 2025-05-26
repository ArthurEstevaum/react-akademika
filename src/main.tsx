import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Cadastro from "./pages/cadastro/index.tsx";
import Login from "./pages/login/index.tsx";
import NovaDisciplina from "./pages/disciplinas/novaDisciplina/index.tsx";
import SubjectProfile from "./pages/disciplinas/subjectProfile/index.tsx";
import Contact from "./pages/contact/index.tsx";
import About from "./pages/about/index.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/queryClient.ts";
import EditSubject from "./pages/disciplinas/editSubject/index.tsx";
import DeleteSubject from "./pages/disciplinas/deleteSubject/index.tsx";
import SubjectDashboard from "./pages/disciplinas/dashboard/index.tsx";
import AuthProvider from "./contexts/AuthProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthProvider />}>
            <Route index path="/" element={<App />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/disciplinas" element={<SubjectDashboard />} />
            <Route path="/disciplinas/criar" element={<NovaDisciplina />} />
            <Route path="/disciplinas/editar/:subjectId" element={<EditSubject />} />
            <Route path="/disciplinas/excluir/:subjectId" element={<DeleteSubject />} />
            <Route path="/disciplinas/:subjectId" element={<SubjectProfile />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/sobre" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
