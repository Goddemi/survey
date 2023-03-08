import { useState } from "react";
import { useDispatch } from "react-redux";
import { UpdatedElementType } from "../type/types";
import { updateQuestionList } from "../../../../store/questionList/questionList";
const QuestionName = ({
  questionUpdateHandler,
  questionName,
}: {
  questionUpdateHandler: any;
  questionName: string;
}) => {
  const [inputValue, setInputValue] = useState(questionName);
  const dispatch = useDispatch();

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuestionName = event.target.value;
    setInputValue(newQuestionName);
    questionUpdateHandler({ questionName: newQuestionName });
  };

  //입력할 때마다 들어가게 하자.

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
