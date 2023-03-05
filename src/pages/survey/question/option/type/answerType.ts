export interface Answer {
  id: string;
  content: string;
}
export interface AnswerType {
  answers: Answer[];
  setAnswers: React.Dispatch<React.SetStateAction<Answer[]>>;
}
