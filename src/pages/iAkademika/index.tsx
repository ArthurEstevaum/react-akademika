import { useState } from "react";
import styles from "./iAkademika.module.css";
import getPromptResponse from "../../services/iakademika/getPromptResponse";
import getExerciseResponse from "../../services/iakademika/getExerciseResponse";

export default function IAkademika() {
  const [promptInput, setPromptInput] = useState("");
  const [iAkademikaResponses, setIAkademikaResponses] = useState<any>([]);

  return (
    <main className={styles.container}>
      {iAkademikaResponses.length == 0 && (
        <h1 style={{ textAlign: "center" }} className="title">
          Olá, vamos estudar?
        </h1>
      )}
      {iAkademikaResponses.length == 0 && (
        <img
          className={styles.iAkademikaIllustration}
          width={284}
          src="/images/iakademika-illustration.svg"
          alt="iakademika illustration"
        />
      )}
      <div >
        {iAkademikaResponses.map((response: any) => (
          <p>{response.prompt}</p>
        ))}
      </div>
      <div className={styles.inputsContainer}>
        <form
          className={styles.promptSection}
          onSubmit={async (e) => {
            e.preventDefault();
            setPromptInput("");
            const newResponse = await getPromptResponse(
              promptInput,
              localStorage.getItem("token") ?? ""
            );
            setIAkademikaResponses((currentResponses: any) => [
              ...currentResponses,
              newResponse,
            ]);
          }}
        >
          <input
            className={styles.promptInput}
            placeholder="Pergunte à IAkademika"
            onChange={(e) => setPromptInput(e.target.value)}
            value={promptInput}
            type="text"
          />
          <button className={styles.submitButton} type="submit">
            <img
              width={16}
              height={16}
              src="/images/right-arrow.svg"
              alt="submit button"
            />
          </button>
        </form>
        <button className={styles.actionButton}>Gerar exercício</button>
        <button className={styles.actionButton}>Criar resumo</button>
      </div>
    </main>
  );
}
