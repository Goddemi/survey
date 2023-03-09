import { useState } from "react";

const QuestionName = ({
  currentPath,
  questionUpdateHandler,
  questionName,
}: {
  currentPath: string;
  questionUpdateHandler: any;
  questionName: string;
}) => {
  const [inputValue, setInputValue] = useState(questionName);

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuestionName = event.target.value;
    setInputValue(newQuestionName);
    questionUpdateHandler({ questionName: newQuestionName });
  };

  return (
    <>
      {currentPath === "/preview" ? (
        <div className="mx-3">
          <input
            className="w-[500px] py-2 border-b border-gray-300 focus:outline-none focus:border-orange-500"
            placeholder="질문"
            value={inputValue}
            disabled
          />
        </div>
      ) : (
        <div className="mx-3">
          <input
            className="w-[500px] py-2 border-b border-gray-300 focus:outline-none focus:border-orange-500"
            placeholder="질문"
            value={inputValue}
            onChange={inputHandler}
          />
        </div>
      )}
    </>
  );
};

export default QuestionName;
