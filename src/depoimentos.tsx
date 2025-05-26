import "./App.css";
import logo from "./assets/akademika-logo.svg";
import hat from "./assets/hat.svg"; 
import login from "./assets/login.png";
import tipos from "./assets/tipos disciplinas.png";
import horarios from "./assets/horário disciplina.png";

function Depoimentos() {
  return (
    <section className="depoimentos-container">
      <div className="depoimentos-topo">
        <div className="texto-destaque">
          <p className="citaçao">
            “Já pensou em estruturar seus estudos de forma eficaz e com o uso de IA? Com a Akademika,
             organizar seus estudos é mamão com açúcar.”
          </p>
          <a href="#" className="link-historia">
            Dê início a sua jornada →
          </a>
        </div>
        <div className="video-thumbnail">
          <img src={hat} alt="Vídeo depoimento" />
        </div>
      </div>
      <div className="depoimentos-grid">
        <div className="depoimento">
        <div className="depoimento-image-wrapper"><img src="/images/login.png" alt="Login" /></div>
          <p>"Permite que os usuários acessem seus recursos de estudo de forma segura e prática, mantendo seu aprendizado garantido."</p>
        </div>
        <div className="depoimento">
        <div className="depoimento-image-wrapper"><img src="/images/tipos disciplinas.png" alt="Tipos disciplina" /></div>
          <p>"As disciplinas são o fundamento da organização dos seus estudos na Akademika, 
            o app permite que você crie as disciplinas para agrupar suas notas, atividades e etc."</p>
        </div>
        <div className="depoimento">
        <div className="depoimento-image-wrapper"><img src="/images/horário disciplina.png" alt="Horário disciplina" /></div>
          <p>"O perfil de disciplina é responsável por mostrar ao usuário quais são as informações fornecidas daquela matéria,
            informando de forma rápida e práticava."</p>
        </div>
        <div className="depoimento">
        <div className="depoimento-image-wrapper"><img src="/images/interface.png" alt="Interface" /></div>
          <p>"Você pode gerenciar as disciplinas com extrema facilidade, com uma interface limpa, simples e intuitiva."</p>
        </div>
        <div className="depoimento">
        <div className="depoimento-image-wrapper"><img src="/images/bloco-de-anotacoes.png" alt="Bloco de notas" /></div>
          <p>"O app permite que qualquer estudante mantenha suas anotações, tópicos de estudo e datas importantes 
            perfeitamente organizados."</p>
        </div>
        <div className="depoimento">
          <div className="depoimento-image-wrapper"><img src="/images/aprendizagem-alimentada-por-ia.png" alt="IA" /></div>
          <p>" nós trazemos uma funcionalidade única: Uma Ia totalmente ao seu dispor."</p>
        </div>
      </div>
    </section>
  );
}

export default Depoimentos;

