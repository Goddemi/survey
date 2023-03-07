import { AnswerType } from "../../../pages/survey/question/option/type/answerType";

export const addAnswerToList = (
  setAnswers: React.Dispatch<React.SetStateAction<AnswerType[]>>
) => {
  const newId = new Date().getTime().toString();
  const newAnswer = { id: newId, content: "" };
  setAnswers((prevState) => [...prevState, newAnswer]);
};
