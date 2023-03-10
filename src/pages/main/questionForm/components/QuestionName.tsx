import { useState } from "react";
import { UpdateType } from "../../../../type/types";

const QuestionName = ({
  currentPath,
  questionName,
  questionUpdateHandler,
}: {
  currentPath: string;
  questionName: string;
  questionUpdateHandler: UpdateType;
}) => {
  const [inputValue, setInputValue] = useState(questionName);

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuestionName = event.target.value;
    setInputValue(newQuestionName);
    questionUpdateHandler({ questionName: newQuestionName });
  };

  return (
    <div>
      <input
        className="w-[500px] py-2 border-b border-gray-300 focus:outline-none focus:border-orange-500"
        placeholder="질문"
        value={inputValue}
        disabled={currentPath === "/" ? false : true}
        onChange={inputHandler}
      />
    </div>
  );
};

export default QuestionName;
