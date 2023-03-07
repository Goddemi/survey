import { XIcon } from "../../icons/Icons";
import {
  SetAnswerType,
  AnswerType,
} from "../../pages/survey/question/option/type/answerType";

interface Props extends SetAnswerType {
  answerList: AnswerType[];
  elementId: string;
}

const DeleteAnswer = ({ answerList, setAnswerList, elementId }: Props) => {
  const handleDelete = (id: string) => {
    const deletedAnswers = answerList.filter((answer) => answer.id !== id);
    setAnswerList(deletedAnswers);
  };
  return (
    <span
      className="mx-2 cursor-pointer"
      onClick={() => handleDelete(elementId)}
    >
      <XIcon />
    </span>
  );
};

export default DeleteAnswer;
