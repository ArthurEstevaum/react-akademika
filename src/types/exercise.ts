export type exercise = {
  topic: string;
  questions: question[]
}

type question = {
  questionName: string;
  options: option[];
  correctAnswerLetter: "A" | "B" | "C" | "D" | "E";
  explanations: explanationsLetters;
}

type option = {
  letter: "A" | "B" | "C" | "D" | "E";
  text: string;
}

type explanationsLetters = {
  A: string;
  B: string;
  C: string;
  D: string;
  E: string;
};