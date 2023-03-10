import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import QuestionName from "./components/QuestionName";
import OptionSelectBox from "./components/OptionSelectBox";
import AnswerForm from "./answerForm/AnswerForm";
import CopyBtn from "./components/CopyBtn";
import DeleteBtn from "./components/DeleteBtn";
import EssentialBtn from "./components/EssentialBtn";
import { updateQuestionList } from "../../../store/questionList/questionList";
import { QuestionType, UpdatedElementType } from "../../../type/types";

const QuestionForm = ({ data }: { data: QuestionType }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const dispatch = useDispatch();
  const { id, questionName, option } = data;

  const questionUpdateHandler = (ele: UpdatedElementType) => {
    dispatch(updateQuestionList({ ...data, ...ele }));
  };

  return (
    <div className="w-[900px] min-w-max my-2 p-5 px-7 bg-white rounded-lg">
      <div className="flex justify-between items-end">
        <QuestionName
          currentPath={currentPath}
          questionName={questionName}
          questionUpdateHandler={questionUpdateHandler}
        />
        <OptionSelectBox
          currentPath={currentPath}
          selectedOption={option}
          questionUpdateHandler={questionUpdateHandler}
        />
      </div>

      <AnswerForm
        currentPath={currentPath}
        data={data}
        questionUpdateHandler={questionUpdateHandler}
      />
      {currentPath === "/" && (
        <div className="w-full flex justify-end items-center border-t-2 border-solid border-gray-200 mt-10 pt-3">
          <CopyBtn questionId={id} />
          <DeleteBtn questionId={id} />
          <EssentialBtn questionUpdateHandler={questionUpdateHandler} />
        </div>
      )}
    </div>
  );
};

export default QuestionForm;
