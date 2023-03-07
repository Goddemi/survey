import { useDispatch } from "react-redux";
import { CopyIcon } from "../../../../../icons/Icons";
import { copyQuestionList } from "../../../../../store/questionList/questionList";
import { saveContent } from "../../../../../store/surveyContent/contentSaveButton";

const Copy = ({ id }: { id: string }) => {
  const dispatch = useDispatch();

  const copyHandler = () => {
    dispatch(saveContent());
    dispatch(copyQuestionList(id));
  };
  return (
    <div className="cursor-pointer" onClick={copyHandler}>
      <CopyIcon />
    </div>
  );
};

export default Copy;
