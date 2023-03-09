import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import QuestionName from "./components/QuestionName";
import OptionSelectBox from "./components/OptionSelectBox";
import AnswerForm from "./answerForm/AnswerForm";
import CopyBtn from "./components/CopyBtn";
import DeleteBtn from "./components/DeleteBtn";
import EssentialBtn from "./components/EssentialBtn";
import { updateQuestionList } from "../../../store/questionList/questionList";
import { QuestionType, UpdatedElementType } from "../../../type/types";
import { RootState } from "../../../store/store";

const QuestionForm = ({ id, data }: { id: string; data: QuestionType }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const dispatch = useDispatch();
  const { questionName, option } = data;

  const questionList = useSelector(
    (state: RootState) => state.questionList.list
  );

  const questionUpdateHandler = (ele: UpdatedElementType) => {
    dispatch(updateQuestionList({ ...data, ...ele }));
  };

  console.log(questionList);

  return (
    <div className="w-[900px] min-w-max my-2 p-5 px-7 bg-white rounded-lg  ">
      <div className="flex justify-between items-end">
        <QuestionName
          currentPath={currentPath}
          questionUpdateHandler={questionUpdateHandler}
          questionName={questionName}
        />
        <OptionSelectBox
          currentPath={currentPath}
          questionUpdateHandler={questionUpdateHandler}
          selectedOption={option}
        />
      </div>

      <AnswerForm
        currentPath={currentPath}
        questionId={id}
        questionUpdateHandler={questionUpdateHandler}
        selectedOption={option}
      />
      {currentPath !== "/preview" && (
        <div className="w-full flex justify-end items-center border-t-2 border-solid border-gray-200 mt-10 pt-3">
          <CopyBtn questionId={id} />
          <DeleteBtn questionId={id} />
          <EssentialBtn />
        </div>
      )}
    </div>
  );
};

export default QuestionForm;
