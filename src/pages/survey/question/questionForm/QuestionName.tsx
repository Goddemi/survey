import { useState } from "react";
import { ModifiedAnswerType } from "../type/types";

const QuestionName = ({
  contentHandler,
  questionName,
}: {
  contentHandler: (ele: ModifiedAnswerType) => void;
  questionName: string;
}) => {
  const [inputValue, setInputValue] = useState(questionName);
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuestionName = event.target.value;
    setInputValue(newQuestionName);
    contentHandler({ questionName: newQuestionName });
  };

  return (
    <div className="mx-3">
      <input
        className="w-[500px] py-2 border-b border-gray-300 focus:outline-none focus:border-orange-500"
        placeholder="질문"
        value={inputValue}
        onChange={inputHandler}
      />
    </div>
  );
};

export default QuestionName;
