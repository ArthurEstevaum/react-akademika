import NavBar from "../../../components/navbar";
import PageTitle from "../../../components/pageTitle";
import styles from "./subjectProfile.module.css";

export default function SubjectProfile() {
  return (
    <>
      <NavBar />
      <PageTitle message="Fundamentos de programação" />
      <main className={styles["container"]}>
        <section className={styles["short-info"]}>
          <div className={styles["info-section-attribute"]}>
            <p>Status:</p>
            <p>Concluído</p>
            <img width={32} src="/images/done.svg" alt="Done icon" />
          </div>
          <div className={styles["info-section-attribute"]}>
            <p>Período:</p>
            <p>1º período</p>
            <img width={32} src="/images/hat.svg" alt="Done icon" />
          </div>
          <div className={styles["info-section-attribute"]}>
            <p>Professor:</p>
            <p>Aêda Monalisa</p>
            <img width={32} src="/images/person.svg" alt="Done icon" />
          </div>
        </section>
        <h2 className={styles["subtitle"]}>Ementa</h2>
        <p className={styles["paragraph"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h2 className={styles["subtitle"]}>Atividades e provas</h2>
        <section className={styles["action-section"]}>
          <input
            className={styles["search-bar"]}
            placeholder="Buscar atividades e provas"
            type="text"
          />

          <img
            width={36}
            height={36}
            src="/images/search.svg"
            alt="search button"
          />

          <img src="/images/filter.svg" alt="filter button" />
          <button className={styles["button-section"]} style={{backgroundColor: "#D2DCFF", color: "#1E3A8A"}} ><img src="/images/add.svg" alt="add icon" />Criar atividade</button>
          <button className={styles["button-section"]} style={{backgroundColor: "#b50e0e8a", color: "#B50E0E"}} ><img src="/images/notification.svg" alt="notification icon" />2 Notificações não lidas</button>

          <div className={styles["subject-list-item"]}>
            <span>A fazer</span>
            <h3>Fibonacci em python</h3>
            <span style={{display: "flex", alignItems: "center", gap: "12px"}}><img src="/images/calendar.svg" alt="calendar icon" />Data de entrega: 12/04/2025</span>
            <img width={72} src="/images/chevron.svg" alt="dropdown icon" />
          </div>
        </section>
      </main>
    </>
  );
}
