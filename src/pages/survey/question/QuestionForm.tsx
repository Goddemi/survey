import { useState } from "react";
import AnswerForm from "./option/AnswerForm";
import QuestionName from "./questionForm/QuestionName";
import OptionSelectBox from "./questionForm/OptionSelectBox";
import Delete from "./questionForm/additionalFunc/Delete";
import Copy from "./questionForm/additionalFunc/Copy";
import Essential from "./questionForm/additionalFunc/Essential";
import { OptionType } from "./option/type/optionType";
import { QuestionType, UpdatedElementType } from "./type/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { updateQuestionList } from "../../../store/questionList/questionList";
import { AnswerType } from "./option/type/answerType";

const QuestionForm = ({ id, data }: { id: string; data: QuestionType }) => {
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
    <div className="w-1/2 my-3 min-w-max p-5 bg-white rounded-lg ">
      <div className="flex justify-between items-end">
        <QuestionName
          questionUpdateHandler={questionUpdateHandler}
          questionName={questionName}
        />
        <OptionSelectBox
          questionUpdateHandler={questionUpdateHandler}
          selectedOption={option}
        />
      </div>

      <AnswerForm
        questionId={id}
        questionUpdateHandler={questionUpdateHandler}
        selectedOption={option}
      />

      <div className="w-full flex justify-end items-center border-t-2 border-solid border-gray-200 mt-10 pt-3">
        <Copy id={id} />
        <Delete id={id} />
        <Essential />
      </div>
    </div>
  );
};

export default QuestionForm;
