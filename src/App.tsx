import "./App.css";
import 'react-loading-skeleton/dist/skeleton.css'
import illustration from "./assets/illustration.svg";
import darkIllustration from "./assets/darkIllustration.svg";
import cloud from "./assets/cloud.svg";
import chevron from "./assets/chevron.svg";
import Carrossel from "./carrossel";
import Depoimentos from "./depoimentos";

function App() {
  return (
    <>
      <main className="main">
        <div className="jumbotron">
          <h1 className="title">Bem vindo à Akademika</h1>
          <h2 className="subtitle">Estude do seu jeito, no seu ritmo.</h2>
          <p className="paragraph">
            mantenha seus estudos sob seu controle, sem dores de cabeça.
          </p>
          <div className="button-home">
            <p className="button-paragraph"> De início a sua jornada:</p>
            <button className="button-home-config">Começar Agora</button>
          </div>
        </div> 
        <img
          className="image"
          id="light-illustration"
          src={illustration}
          alt="student illustration"
        />
        <img
          className="image"
          id="dark-illustration"
          src={darkIllustration}
          alt="student illustration"
        />
        <img
          className="image"
          id="cloud-illustration"
          src={cloud}
          alt="cloud illustration"
        />
        <a id="scroll-down" href="#">
          <img
            className="image"
            id="chevron-icon"
            src={chevron}
            alt="chevron icon"
          />
        </a>
      </main>
      <Carrossel />
      <Depoimentos />
    </>
  );
}

export default App;