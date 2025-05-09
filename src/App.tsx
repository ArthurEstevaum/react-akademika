import "./App.css";
import NavBar from "./components/navbar";
import illustration from "./assets/illustration.svg";
import darkIllustration from "./assets/darkIllustration.svg";
import cloud from "./assets/cloud.svg";
import chevron from "./assets/chevron.svg";

function App() {
  return (
    <>
      <NavBar />
      <main className="main">
        <div className="jumbotron">
          <h1 className="title">Bem vindo à Akademika</h1>
          <h2 className="subtitle">Estude do seu jeito, no seu ritmo.</h2>
          <p className="paragraph">
            mantenha seus estudos sob seu controle, sem dores de cabeça.
          </p>
          <button className="primary-button">Comece agora</button>
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
    </>
  );
}

export default App;
