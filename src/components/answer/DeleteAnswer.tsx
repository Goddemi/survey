import { XIcon } from "../../icons/Icons";
import { AnswerType } from "../../pages/survey/question/option/type/answerType";
import { UpdateType } from "../../pages/survey/question/type/types";
interface Props {
  answerList: AnswerType[];
  elementId: string;
  questionUpdateHandler: UpdateType;
}

const DeleteAnswer = ({
  answerList,
  elementId,
  questionUpdateHandler,
}: Props) => {
  const handleDelete = (id: string) => {
    const deletedAnswers = answerList.filter((answer) => answer.id !== id);
    questionUpdateHandler({ multiAnswer: deletedAnswers });
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
