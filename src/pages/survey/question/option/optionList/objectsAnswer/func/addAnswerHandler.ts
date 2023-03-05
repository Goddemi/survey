import { Answer } from "../../../type/answerType";

export const addAnswerHandler = (
  answers: Answer[],
  setAnswers: React.Dispatch<React.SetStateAction<Answer[]>>,
  answerRef: React.RefObject<HTMLInputElement>
) => {
  const newId = new Date().getTime().toString();
  const newAnswer = { id: newId, content: "" };
  setAnswers([...answers, newAnswer]);
  if (answerRef.current) {
    answerRef.current.focus();
  }
};
