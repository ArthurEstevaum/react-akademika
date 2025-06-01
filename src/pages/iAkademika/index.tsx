import { useState } from "react";
import styles from "./iAkademika.module.css";
import getPromptResponse from "../../services/iakademika/getPromptResponse";
import getExerciseResponse from "../../services/iakademika/getExerciseResponse";
import { exercise } from "../../types/exercise";
import { summary } from "../../types/summary";
import { prompt } from "../../types/prompt";
import Skeleton from "react-loading-skeleton";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SelectInput from "../../components/select";
import {
  BookmarkIcon,
  FileTextIcon,
  LightningBoltIcon,
  QuestionMarkCircledIcon,
} from "@radix-ui/react-icons";
import getSummaryResponse from "../../services/iakademika/getSummaryResponse";

export default function IAkademika() {
  const [promptInput, setPromptInput] = useState("");
  const [topicInput, setTopicInput] = useState("");
  const [processingResponse, setProcessingResponse] = useState(false);
  const [userInputs, setUserInputs] = useState<string[]>([]);
  const [inputMode, setInputMode] = useState<"prompt" | "exercise" | "summary">(
    "exercise"
  );
  const [iAkademikaResponses, setIAkademikaResponses] = useState<
    Array<exercise | summary | prompt>
  >([]);

  const [difficulty, setDifficulty] = useState("MEDIUM");
  const [size, setSize] = useState("Médio");
  const difficultyOptions = [
    { value: "HARD", text: "Difícil" },
    { value: "MEDIUM", text: "Médio" },
    { value: "EASY", text: "Fácil" },
  ];

  const sizeOptions = [
    { value: "pequeno", text: "Pequeno" },
    { value: "médio", text: "Médio" },
    { value: "grande", text: "Grande" },
  ];

  async function handlePrompt(token: string) {
    setPromptInput("");
    setUserInputs((currentUserInputs) => [...currentUserInputs, promptInput]);
    const newResponse = await getPromptResponse(promptInput, token);
    setIAkademikaResponses((currentResponses: typeof iAkademikaResponses) => [
      ...currentResponses,
      newResponse,
    ]);
  }

  async function handleSummary(token: string) {
    setTopicInput("");
    setUserInputs((currentUserInputs) => [
      ...currentUserInputs,
      `Resumo estruturado: ${topicInput}`,
    ]);
    const newSummary = await getSummaryResponse(topicInput, size, token);
    setIAkademikaResponses((currentResponses: typeof iAkademikaResponses) => [
      ...currentResponses,
      newSummary,
    ]);
  }

  async function handleExercise(token: string) {
    setTopicInput("");
    setUserInputs((currentUserInputs) => [
      ...currentUserInputs,
      `Crie exercícios sobre ${topicInput}`,
    ]);
    const newExercise = await getExerciseResponse(
      topicInput,
      difficulty,
      token
    );
    setIAkademikaResponses((currentResponses: typeof iAkademikaResponses) => [
      ...currentResponses,
      newExercise,
    ]);
  }

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
      {(iAkademikaResponses.length !== 0 || processingResponse) && (
        <div className={styles.chatSection}>
          <div>
            {iAkademikaResponses.map((response: any, index) => (
              <div key={index}>
                <div className={styles.userInputsSection}>
                  <h1>Você</h1>
                  <p>{userInputs[index]}</p>
                  {(response.summary || response.exercises) && (
                    <div className={styles.saveSection}>
                      <BookmarkIcon width={24} height={24} />
                      Salvar nos meus conteúdos
                    </div>
                  )}
                </div>
                <div className={styles.iAkademikaResponseSection}>
                  <h1>IAkademika</h1>
                  {(response.prompt || response.summary) && (
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {response.prompt || response.summary}
                    </ReactMarkdown>
                  )}
                  {response.exercises && (
                    <section>
                      <h1>{response.topic}</h1>
                      
                    </section>
                  )}
                </div>
              </div>
            ))}

            {processingResponse && (
              <div>
                <div className={styles.userInputsSection}>
                  <h1>Você</h1>
                  <p>{userInputs[userInputs.length - 1]}</p>
                </div>
                <p>Processando resposta...</p>
                <Skeleton
                  style={{ height: "30px", marginTop: "12px" }}
                  count={5}
                />
              </div>
            )}
          </div>
        </div>
      )}
      <div className={styles.inputsContainer}>
        <div className={styles.promptMode}>
          {inputMode === "exercise" && (
            <>
              <p>Modo exercício</p>
              <LightningBoltIcon width={20} height={20} />
            </>
          )}
          {inputMode === "summary" && (
            <>
              <p>Modo resumo</p>
              <FileTextIcon width={20} height={20} />
            </>
          )}
          {inputMode === "prompt" && (
            <>
              <p>Modo pergunta</p>
              <QuestionMarkCircledIcon width={20} height={20} />
            </>
          )}
        </div>
        <form
          className={styles.promptSection}
          onSubmit={async (e) => {
            e.preventDefault();
            const token = localStorage.getItem("token") ?? "";
            setProcessingResponse(true);

            if (inputMode === "prompt") {
              await handlePrompt(token);
              setProcessingResponse(false);
              return;
            }

            if (inputMode === "summary") {
              await handleSummary(token);
              setProcessingResponse(false);
              return;
            }

            if (inputMode === "exercise") {
              await handleExercise(token);
              setProcessingResponse(false);
              return;
            }
          }}
        >
          {inputMode === "prompt" && (
            <input
              className={styles.promptInput}
              placeholder="Pergunte à IAkademika"
              onChange={(e) => setPromptInput(e.target.value)}
              value={promptInput}
              type="text"
            />
          )}
          {(inputMode === "exercise" || inputMode === "summary") && (
            <>
              <input
                className={styles.topicInput}
                placeholder={`Escolha o tópico do ${
                  inputMode === "summary" ? "resumo" : "exercício"
                }`}
                onChange={(e) => setTopicInput(e.target.value)}
                value={topicInput}
                type="text"
              />
              <SelectInput
                items={
                  inputMode === "exercise" ? difficultyOptions : sizeOptions
                }
                label={
                  inputMode === "exercise" ? "Dificuldade" : "Tamanho do resumo"
                }
                placeholder={`${
                  inputMode === "exercise" ? "dificuldade" : "tamanho"
                }`}
                value={inputMode === "exercise" ? difficulty : size}
                setValue={inputMode === "exercise" ? setDifficulty : setSize}
              />
            </>
          )}
          <button className={styles.submitButton} type="submit">
            <img
              width={16}
              height={16}
              src="/images/right-arrow.svg"
              alt="submit button"
            />
          </button>
        </form>
        {inputMode !== "exercise" && (
          <button
            className={styles.actionButton}
            onClick={() => setInputMode("exercise")}
          >
            Gerar exercício
          </button>
        )}
        {inputMode !== "summary" && (
          <button
            className={styles.actionButton}
            onClick={() => setInputMode("summary")}
          >
            Criar resumo
          </button>
        )}
        {inputMode !== "prompt" && (
          <button
            className={styles.actionButton}
            onClick={() => setInputMode("prompt")}
          >
            Perguntar
          </button>
        )}
      </div>
    </main>
  );
}
