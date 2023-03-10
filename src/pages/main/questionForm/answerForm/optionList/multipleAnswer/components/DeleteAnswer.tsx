import { XIcon } from "../../../../../../../icons/Icons";
import { AnswerType, UpdateType } from "../../../../../../../type/types";
interface Props {
  multiAnswerList: AnswerType[];
  elementId: string;
  questionUpdateHandler: UpdateType;
}

const DeleteAnswer = ({
  multiAnswerList,
  elementId,
  questionUpdateHandler,
}: Props) => {
  const handleDelete = (id: string) => {
    const deletedAnswers = multiAnswerList.filter((answer) => answer.id !== id);
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
