import { ModifiedAnswerType } from "../type/types";

const QuestionName = ({
  contentHandler,
}: {
  contentHandler: (ele: ModifiedAnswerType) => void;
}) => {
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuestionName = event.target.value;
    contentHandler({ questionName: newQuestionName });
  };

  return (
    <div className="mx-3">
      <input
        className="w-[500px] py-2 border-b border-gray-300 focus:outline-none focus:border-orange-500"
        placeholder="질문"
        onChange={inputHandler}
      />
    </div>
  );
};

export default QuestionName;
