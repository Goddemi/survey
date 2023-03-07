import { useState } from "react";
import AnswerForm from "./option/AnswerForm";
import QuestionName from "./questionForm/QuestionName";
import OptionSelectBox from "./questionForm/OptionSelectBox";
import Delete from "./questionForm/additionalFunc/Delete";
import Copy from "./questionForm/additionalFunc/Copy";
import Essential from "./questionForm/additionalFunc/Essential";
import { OptionType } from "./option/type/optionType";
import { QuestionType, ModifiedAnswerType } from "./type/types";

const QuestionForm = ({ id, data }: { id: string; data: QuestionType }) => {
  const [selectedOption, setSelectedOption] = useState<OptionType>("short");
  const [questionContent, setQuestionContent] = useState(data);

  const contentHandler = (ele: ModifiedAnswerType) => {
    setQuestionContent((prevState) => ({ ...prevState, ...ele }));
  };
  console.log(questionContent);

  return (
    <div className="w-1/2 my-3 min-w-max p-5 bg-white rounded-lg ">
      <div className="flex justify-between items-end">
        <QuestionName
          contentHandler={contentHandler}
          questionName={data.questionName}
        />
        <OptionSelectBox
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          contentHandler={contentHandler}
        />
      </div>

      <AnswerForm
        selectedOption={selectedOption}
        contentHandler={contentHandler}
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
