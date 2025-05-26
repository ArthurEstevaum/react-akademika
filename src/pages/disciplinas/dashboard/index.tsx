import { useEffect, useState } from "react";
import NavBar from "../../../components/navbar";
import PageTitle from "../../../components/pageTitle";
import styles from "./subjectDashboard.module.css";
import { useSubjects } from "../../../services/subjects/getSubjects";
import { ISubjectCreationData } from "../../../interfaces/ISubjectCreationData";
import { Link, useNavigate } from "react-router";
import { ISubjectWithId } from "../../../interfaces/ISubjectWithId";

export default function SubjectDashboard() {
  const { data: subjects, isLoading, error } = useSubjects();
  const [subjectSearch, setSubjectSearch] = useState("");
  const [subjectsToShow, setSubjectsToShow] = useState<ISubjectWithId[]>([]);

  useEffect(() => {
    setSubjectsToShow(subjects ?? []);
  }, [isLoading]);

  return (
    <>
      <PageTitle message="Disciplinas" />
      <main className={styles["container"]}>
        <section className={styles["action-section"]}>
          <input
            className={styles["search-bar"]}
            placeholder="Buscar disciplinas"
            type="text"
            value={subjectSearch}
            onChange={(e) => setSubjectSearch(e.target.value)}
          />
          {subjectSearch !== "" && (
            <button
              style={{ backgroundColor: "transparent", padding: "6px" }}
              onClick={() => {
                setSubjectSearch("");
                setSubjectsToShow(
                  (currentSubjects) => subjects ?? currentSubjects
                );
              }}
            >
              <img
                width={36}
                style={{ padding: "6px" }}
                src="/images/close.svg"
                alt="clear search"
              />
            </button>
          )}
          <button
            style={{ backgroundColor: "transparent", padding: "6px" }}
            onClick={() => {
              const filteredSubjects = subjects.filter(
                (subject: ISubjectCreationData) =>
                  subject.name.toLowerCase().includes(subjectSearch)
              );
              setSubjectsToShow(
                (currentSubjects) => filteredSubjects ?? currentSubjects
              );
            }}
          >
            <img
              width={36}
              height={36}
              src="/images/search.svg"
              alt="search button"
            />
          </button>
          <Link
            className={styles["button-section-container"]}
            to="/disciplinas/criar"
          >
            <button
              className={styles["button-section"]}
              style={{ backgroundColor: "#D2DCFF", color: "#1E3A8A" }}
            >
              <img width={24} src="/images/add.svg" alt="add icon" />
              Criar disciplina
            </button>
          </Link>
        </section>
        <section className={styles["subject-list-section"]}>
          {subjectsToShow.length > 0 ? (
            subjectsToShow.map((subject) => (
              <div className={styles["subject-list-item"]} key={subject.id}>
                <div className={styles["subject-list-item__top-bar"]}>
                  <Link to={`/disciplinas/${subject.id}`}>
                    <h3 style={{ color: "#213547", fontWeight: "500" }}>
                      {subject.name}
                    </h3>
                  </Link>
                  <div
                    style={{
                      display: "flex",
                      gap: "16px",
                      alignContent: "center",
                    }}
                  >
                    <Link to={`/disciplinas/editar/${subject.id}`}>
                      <img src="/images/edit.svg" alt="edit icon" />
                    </Link>
                    <Link to={`/disciplinas/excluir/${subject.id}`}>
                      <img src="/images/archive.svg" alt="delete icon" />
                    </Link>
                  </div>
                </div>
                <div>
                  <div className={styles["subject-list-item__info-section"]}>
                    {subject.status === "concluído" && (
                      <img
                        width={24}
                        src="/images/done.svg"
                        alt="done subject icon"
                      />
                    )}
                    {subject.status === "cursando" && (
                      <img
                        width={32}
                        src="/images/hourglass.svg"
                        alt="pending subject icon"
                      />
                    )}
                    {subject.status === "não iniciado" && (
                      <img
                        width={24}
                        src="/images/loading.svg"
                        alt="not started subject icon"
                      />
                    )}
                    <p>{subject.status}</p>
                  </div>
                  <div className={styles["subject-list-item__info-section"]}>
                    <img width={24} src="/images/hat.svg" alt="quarter icon" />
                    <p>{subject.quarter}º período</p>
                  </div>
                  <div className={styles["subject-list-item__info-section"]}>
                    <img width={24} src="/images/person.svg" alt="teacher icon" />
                    {subject.teacher === "" && <p>Professor não cadastrado</p>}
                    <p>{subject.teacher}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Nenhuma disciplina encontrada.</p>
          )}
        </section>
      </main>
    </>
  );
}
