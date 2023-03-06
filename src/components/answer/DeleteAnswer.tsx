import { XIcon } from "../../icons/Icons";
import { AnswerType } from "../../pages/survey/question/option/type/answerType";

interface Props extends AnswerType {
  elementId: string;
}

const DeleteAnswer = ({ elementId, answers, setAnswers }: Props) => {
  const handleDelete = (id: string) => {
    const deletedAnswers = answers.filter((answer) => answer.id !== id);
    setAnswers(deletedAnswers);
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
