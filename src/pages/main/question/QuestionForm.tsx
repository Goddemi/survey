import AnswerForm from "./option/AnswerForm";
import QuestionName from "./questionForm/QuestionName";
import OptionSelectBox from "./questionForm/OptionSelectBox";
import Delete from "./questionForm/additionalFunc/Delete";
import Copy from "./questionForm/additionalFunc/Copy";
import Essential from "./questionForm/additionalFunc/Essential";

import { QuestionType, UpdatedElementType } from "./type/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { updateQuestionList } from "../../../store/questionList/questionList";
import { useLocation } from "react-router-dom";

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
    <div className="w-[900px] min-w-max my-2 bg-white rounded-lg p-5 ">
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
      {currentPath === "/preview" || (
        <div className="w-full flex justify-end items-center border-t-2 border-solid border-gray-200 mt-10 pt-3">
          <Copy questionId={id} />
          <Delete questionId={id} />
          <Essential />
        </div>
      )}
    </div>
  );
};

export default QuestionForm;
