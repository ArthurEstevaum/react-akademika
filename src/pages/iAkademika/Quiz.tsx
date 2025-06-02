import { useState } from "react";
import { exercise, question } from "../../types/exercise";
import styles from "./iAkademika.module.css";
import { CheckCircledIcon } from "@radix-ui/react-icons";

export default function Quiz({ exercise }: any) {
  const [currentQuestion, setCurrentQuestion] = useState<question>(
    exercise.exercises[0]
  );
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState<null | string>(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [currentFeedback, setCurrentFeedback] = useState("");
  const [exerciseStats, setExerciseStats] = useState<{
    correct: number;
    incorrect: number;
  }>({ correct: 0, incorrect: 0 });

  return (
    <>
      {isFinished ? (
        <section className={styles.exerciseContainer}>
          <h1>{exercise.topic}</h1>
          <h2 style={{fontSize: "1.4rem"}}>Sua pontuação:</h2>
          <p style={{ color: "green", fontSize: "1.2rem" }}>Acertos: {exerciseStats.correct}</p>
          <p style={{ color: "red", fontSize: "1.2rem" }}>Erros: {exerciseStats.incorrect}</p>
        </section>
      ) : (
        <section className={styles.exerciseContainer}>
          <h1>{exercise.topic}</h1>
          <p style={{ fontWeight: "600", fontSize: "1.2rem" }}>
            {currentQuestionNumber}/{exercise.exercises.length}
          </p>
          <div className={styles.exerciseStats}>
            <p style={{ color: "green" }}>Acertos: {exerciseStats.correct}</p>
            <p style={{ color: "red" }}>Erros: {exerciseStats.incorrect}</p>
          </div>
          <p>{currentQuestion.questionName}</p>
          {currentQuestion.options.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                if (currentFeedback !== "") return;
                setSelectedAnswer(option.letter);
              }}
              className={`${styles.exerciseOption} ${
                selectedAnswer === option.letter ? styles.activeOption : ""
              }`}
            >
              <span>{option.letter}</span> <p>{option.text}</p>
            </div>
          ))}
          {currentFeedback !== "" && (
            <p
              className={`${
                isAnswerCorrect
                  ? styles.exerciseCorrectExplanation
                  : styles.exerciseIncorrectExplanation
              }`}
            >
              {currentFeedback}
            </p>
          )}
          {currentFeedback === "" && (
            <button
              disabled={selectedAnswer == null}
              className={styles.answerButton}
              onClick={() => {
                if (selectedAnswer === currentQuestion.correctAnswerLetter) {
                  setIsAnswerCorrect(true);
                  setExerciseStats({
                    correct: exerciseStats.correct + 1,
                    incorrect: exerciseStats.incorrect,
                  });
                  //@ts-ignore
                  setCurrentFeedback(
                    currentQuestion.explanations[selectedAnswer]
                  );
                  setSelectedAnswer(null);
                  return;
                }
                if (selectedAnswer !== currentQuestion.correctAnswerLetter) {
                  setExerciseStats({
                    correct: exerciseStats.correct,
                    incorrect: exerciseStats.incorrect + 1,
                  });
                  //@ts-ignore
                  setCurrentFeedback(currentQuestion.explanations[selectedAnswer]
                  );
                  setSelectedAnswer(null);
                  return;
                }
              }}
            >
              Responder
            </button>
          )}
          {currentFeedback && (
            <button
              onClick={() => {
                if (currentQuestionNumber === exercise.exercises.length) {
                  setIsFinished(true);
                  return;
                }
                setIsAnswerCorrect(false);
                setCurrentFeedback("");
                setCurrentQuestionNumber(currentQuestionNumber + 1);
                setCurrentQuestion(exercise.exercises[currentQuestionNumber]);
              }}
              className={styles.answerButton}
            >
              {currentQuestionNumber === exercise.exercises.length
                ? "Finalizar"
                : "Próxima questão"}
            </button>
          )}
        </section>
      )}
    </>
  );
}
