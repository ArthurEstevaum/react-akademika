import React, { useState } from "react";
import "./App.css";

const imagens = [
  "/images/disciplinas.png",
  "/images/disciplina.png",
  "/images/quadro de atividades.png",
  "/images/editar disciplina 1.png", 
  "/images/editar disciplina 2.png",
  "/images/editar disciplina 3.png",    
  "/images/edição concluida disciplina.png",
];

export default function Carrossel() {
  const [indiceAtual, setIndiceAtual] = useState(0);
  const quantidadeVisivel = 3; // Agora mostra 3 imagens

  const proximo = () => {
    setIndiceAtual((prev) => (prev + 1) % imagens.length);
  };

  const anterior = () => {
    setIndiceAtual((prev) => (prev - 1 + imagens.length) % imagens.length);
  };

  // Calcula os índices das imagens que vão aparecer
  const indicesVisiveis = [];
  for (let i = 0; i < quantidadeVisivel; i++) {
    indicesVisiveis.push((indiceAtual + i) % imagens.length);
  }

  return (
    <div className="carrossel-container">
      <button className="carrossel-btn" onClick={anterior}>‹</button>
      <div className="img-wrapper" style={{ display: "flex", gap: "10px" }}>
        {indicesVisiveis.map((idx) => (
          <img
            key={idx}
            src={imagens[idx]}
            alt={`Slide ${idx}`}
            className="carrossel-imagem"
          />
        ))}
      </div>
      <button className="carrossel-btn" onClick={proximo}>›</button>
    </div>
  );
}
