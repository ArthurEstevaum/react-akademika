import { useState } from "react";
import "./App.css";
import Header from "./widgets/header";
import WidthContainer from "./components/widthContainer";

function App() {
 
  return (
    <>
      <Header/>
      <WidthContainer>
        <div className="home-container">
          <h1 className="home-title">
            Bem vindo à Akademika
          </h1>
          <h2 className="home-subtitle">Estude do seu jeito, no seu ritmo</h2>
          <p className="home-paragraph">
            mantenha seus estudos sob seu controle,<br></br> sem dores de cabeça
          </p>
          <a className="home-cta" href="">Comece agora</a>
        </div>
        <div className="home-image-bg">
          <img src="images/home-ilustration.png" alt="Ilustração de um mulher com mochila nas costas segurando uma pilha de livros" />
        </div>
       
      </WidthContainer>
    </>
  );
}

export default App;
