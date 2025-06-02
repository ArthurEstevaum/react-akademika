import { Link, useParams } from "react-router";
import FormContainer from "../../../components/formContainer";
import { useState } from "react";
import styles from "./deleteSubject.module.scss";
import deleteSubject from "../../../services/subjects/deleteSubject";
import { queryClient } from "../../../services/queryClient";

export default function DeleteSubject() {
  const { subjectId } = useParams();
  const [subjectDeleted, setSubjectDeleted] = useState(false);

  return (
    <FormContainer message="Excluir disciplina">
      {subjectDeleted ? (
        <div className={styles["discipline-created"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="151"
            height="150"
            viewBox="0 0 151 150"
            fill="none"
          >
            <path
              d="M75 7C61.5571 7 48.416 10.9863 37.2386 18.4548C26.0612 25.9233 17.3495 36.5386 12.2051 48.9582C7.0607 61.3779 5.71469 75.0442 8.33728 88.2288C10.9599 101.413 17.4333 113.524 26.9389 123.03C36.4445 132.536 48.5553 139.009 61.74 141.632C74.9246 144.254 88.5909 142.908 101.011 137.764C113.43 132.619 124.045 123.908 131.514 112.73C138.982 101.553 142.969 88.4117 142.969 74.9688C142.969 56.9423 135.808 39.6542 123.061 26.9076C110.315 14.161 93.0265 7 75 7ZM111.914 48.9062L69.586 97.3047C69.3663 97.5547 69.096 97.7551 68.7929 97.8925C68.4898 98.0299 68.1609 98.1011 67.8282 98.1016C67.313 98.1067 66.8106 97.9419 66.3985 97.6328L38.4375 76.1172C38.1928 75.9294 37.9875 75.6953 37.8333 75.4282C37.6791 75.1611 37.579 74.8663 37.5387 74.5605C37.4985 74.2547 37.5188 73.944 37.5987 73.6461C37.6785 73.3482 37.8162 73.0689 38.0039 72.8242C38.1917 72.5795 38.4258 72.3742 38.6929 72.22C38.96 72.0658 39.2548 71.9657 39.5606 71.9254C39.8664 71.8852 40.1771 71.9055 40.475 71.9853C40.7729 72.0652 41.0522 72.2029 41.2969 72.3906L67.5 92.5703L108.375 45.6953C108.578 45.4629 108.825 45.2728 109.102 45.1359C109.378 44.9989 109.679 44.9178 109.987 44.8971C110.295 44.8765 110.604 44.9166 110.897 45.0154C111.189 45.1141 111.459 45.2695 111.691 45.4727C111.924 45.6758 112.114 45.9227 112.251 46.1993C112.388 46.4759 112.469 46.7768 112.49 47.0847C112.51 47.3927 112.47 47.7017 112.371 47.9941C112.273 48.2866 112.117 48.5567 111.914 48.7891V48.9062Z"
              fill="#71B595"
            />
          </svg>
          <p>Disciplina excluída com sucesso</p>
          <Link to="/disciplinas">Voltar para meu dashboard</Link>
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h2>Tem certeza que deseja excluir esta disciplina?</h2>
          <p style={{ margin: "36px auto" }}>
            <strong>Esta ação não pode ser desfeita.</strong>
          </p>
          <Link style={{fontSize: "1.4rem"}} to={`/disciplinas/${subjectId }`}>
            <button className={styles["goto-subject-button"]}>Voltar</button>
          </Link>
          <button
            style={{
              color: "#C53333",
              backgroundColor: "#FCA1A1",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
              fontSize: "1.2rem",
              margin: "32px auto 0 auto",
            }}
            onClick={async () => {
              const response = await deleteSubject(subjectId ?? "", localStorage.getItem("token") ?? "")
              if(response.ok) {
                setSubjectDeleted(true);
                return
              }
              queryClient.invalidateQueries({ queryKey: ["subjects"] })
              return
            }}
          >
            <img src="/images/archive.svg" alt="delete icon" />
            Confirmar exclusão
          </button>
        </div>
      )}
    </FormContainer>
  );
}
