import { useDispatch } from "react-redux";
import { CopyIcon } from "../../../../icons/Icons";
import { copyQuestionList } from "../../../../store/questionList/questionList";

const CopyBtn = ({ questionId }: { questionId: string }) => {
  const dispatch = useDispatch();

  const copyHandler = () => {
    dispatch(copyQuestionList(questionId));
  };
  return (
    <div className="cursor-pointer" onClick={copyHandler}>
      <CopyIcon />
    </div>
  );
};

export default CopyBtn;
