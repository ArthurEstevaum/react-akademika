import ContentContainer from "../../components/contentContainer";
import NavBar from "../../components/navbar";
import PageTitle from "../../components/pageTitle";
import styles from "./about.module.css";

export default function About() {
  return (
    <>
      <PageTitle message="Sobre a Akademika" />
      <ContentContainer>
        <h2 className={styles["subtitle"]}>O problema</h2>
        <p className={styles["paragraph"]}>
          Um dos maiores desafios da educação e do aprendizado é a gestão do
          tempo e do conhecimento, problema esse que existe desde o ensino
          básico ao ensino superior, até mesmo em alunos de doutorado. De acordo
          com pesquisas, a falta de estruturação dos estudos é um fator que
          contribui para baixo desempenho, estresse e até mesmo evasão.
          Estudantes de baixa renda são especialmente afetados, pois precisam
          conciliar trabalho e estudo, tendo menos tempo e recursos para uma
          preparação eficiente. Além disso, estudantes vindos de escolas
          públicas frequentemente enfrentam dificuldades de adaptação ao ensino
          superior, sentindo-se sobrecarregados e inseguros diante das novas
          exigências.
        </p>
        <h2 className={styles["subtitle"]}>Nossa solução</h2>
        <p className={styles["paragraph"]}>
          A Akademika vem pra solucionar esses problemas permitindo que qualquer
          estudante mantenha suas anotações, tópicos de estudo e datas
          importantes perfeitamente organizados, sem a necessidade de sistemas
          complexos ou montes de papéis. Com apenas alguns passos, você pode
          ficar despreocupado e focar no que realmente importa: aprender. Além
          disso, nós trazemos uma funcionalidade única: Uma Ia totalmente ao seu
          dispor, que te auxilia por exemplo criando resumos e exercícios
          nivelados para cada disciplina.
        </p>
        <h2 className={styles["subtitle"]}>Funcionalidades</h2>
        <p className={styles["paragraph"]}>
          A Akademika funciona separando cada parte dos seus estudos em
          'disciplinas', permitindo que todas as informações importantes estejam
          exatamente onde deveriam estar. A partir disso, o app te permite
          registrar e acessar facilmente essas informações, além de te deixar de
          olho em atividades e datas importantes como provas ou testes.
          Aqui vai uma lista das nossas principais funcionalidades:
        </p>
        <ul className={styles["feature-list"]}>
            <li>Cadastro de disciplinas e edição de disciplinas</li>
            <li>Acompanhamento das informações através de um dashboard simples e intuitivo</li>
            <li>Sistema de notificações pra você nunca esquecer do que precisa</li>
            <li>Gerenciamento do status de atividades através de um quadro interativo</li>
            <li>Geração de resumos e exercícios personalizados com IA</li>
        </ul>
      </ContentContainer>
    </>
  );
}
