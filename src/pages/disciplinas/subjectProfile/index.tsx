import { Link, useParams } from "react-router";
import NavBar from "../../../components/navbar";
import PageTitle from "../../../components/pageTitle";
import styles from "./subjectProfile.module.css";
import { useSubject } from "../../../services/subjects/getSubjectInfo";
import { useEffect, useState } from "react";
import { Deadline } from "../../../types/deadline";
import WidthContainer from "../../../components/widthContainer/index";

export default function SubjectProfile() {
  const [deadlineSearch, setDeadlineSearch] = useState("");
  const { subjectId } = useParams();
  const { data: subject, isLoading, error } = useSubject(subjectId ?? "");
  const [deadlinesToShow, setDeadlinesToShow] = useState<Deadline[]>([]);

  useEffect(() => {
    setDeadlinesToShow(subject?.deadlines ?? []);
  }, [isLoading]);

  return (
    <>
      <NavBar />
      <PageTitle message={subject?.name ?? ""} />
      <main className={styles["container"]}>
        <section className={styles["short-info"]}>
          <div className={styles["info-section-attribute"]}>
            <p>Status:</p>
            <p>{subject?.status}</p>
            {subject?.status === "concluído" && (
              <img width={32} src="/images/done.svg" alt="Done icon" />
            )}
            {subject?.status === "não iniciado" && (
              <img width={32} src="/images/loading.svg" alt="Pending icon" />
            )}
            {subject?.status === "cursando" && (
              <img
                width={42}
                src="/images/hourglass.svg"
                alt="Hourglass icon"
              />
            )}
          </div>
          <div className={styles["info-section-attribute"]}>
            <p>Período:</p>
            <p>{subject?.quarter}º período</p>
            <img width={32} src="/images/hat.svg" alt="Done icon" />
          </div>
          <div className={styles["info-section-attribute"]}>
            <p>Professor:</p>
            <p>{subject?.teacher}</p>
            <img width={32} src="/images/person.svg" alt="Done icon" />
          </div>
        </section>
        <section className={styles["button-container"]}>
          <Link
            style={{ display: "block", width: "fit-content" }}
            to={`/disciplinas/editar/${subjectId}`}
          >
            <button
              className={styles["button-section"]}
              style={{ backgroundColor: "#D2DCFF", color: "#1E3A8A" }}
            >
              <img width={24} src="/images/edit.svg" alt="edit icon" />
              Editar disciplina
            </button>
          </Link>
          <Link
            style={{ display: "block", width: "fit-content" }}
            to={`/disciplinas/excluir/${subjectId}`}
          >
            <button
              className={styles["button-section"]}
              style={{ backgroundColor: "#FCA1A1", color: "#C53333" }}
            >
              <img width={24} src="/images/archive.svg" alt="edit icon" />
              Excluir disciplina
            </button>
          </Link>
        </section>
        <h2 className={styles["subtitle"]}>Ementa</h2>
        <p className={styles["paragraph"]}>{subject?.syllabus}</p>
        <h2 className={styles["subtitle"]}>Provas e datas importantes</h2>
        <section className={styles["action-section"]}>
          <input
            className={styles["search-bar"]}
            placeholder="Buscar provas e datas"
            type="text"
            value={deadlineSearch}
            onChange={(e) => setDeadlineSearch(e.target.value)}
          />

          {deadlineSearch !== "" && (
            <button
              style={{ backgroundColor: "transparent", padding: "6px" }}
              onClick={() => {
                setDeadlineSearch("");
                setDeadlinesToShow(
                  (currentDeadlines) => subject?.deadlines ?? currentDeadlines
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
              const filteredDeadlines = subject?.deadlines.filter((deadline) =>
                deadline.name.toLowerCase().includes(deadlineSearch)
              );
              setDeadlinesToShow(
                (currentDeadlines) => filteredDeadlines ?? currentDeadlines
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
        </section>
        <div className={styles["subject-list-section"]}>
          {deadlinesToShow.length > 0 ? (
            deadlinesToShow.map((deadline, index) => {
              if (deadline.name === "") {
                return <p>Nenhuma prova ou data importante cadastrada.</p>;
              }
              return (
                <div className={styles["subject-list-item"]} key={index}>
                  <h3>{deadline.name}</h3>
                  <span
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <img src="/images/calendar.svg" alt="calendar icon" />
                    {deadline.date}
                  </span>
                </div>
              );
            })
          ) : (
            <p>Nenhuma prova ou data importante encontrada.</p>
          )}
        </div>
      </main>
    </>
  );
}
