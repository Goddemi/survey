import { useDispatch } from "react-redux";
import { CopyIcon } from "../../../../../icons/Icons";
import { copyQuestionList } from "../../../../../store/questionList/questionList";
import { saveContent } from "../../../../../store/surveyContent/contentSaveButton";

const Copy = ({ questionId }: { questionId: string }) => {
  const dispatch = useDispatch();

  const copyHandler = () => {
    dispatch(saveContent());
    dispatch(copyQuestionList(questionId));
  };
  return (
    <div className="cursor-pointer" onClick={copyHandler}>
      <CopyIcon />
    </div>
  );
};

export default Copy;
