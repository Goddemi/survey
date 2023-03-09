import { UpdateType } from "../../../../../type/types";

const ShortAnswer = ({
  questionUpdateHandler,
  currentPath,
}: {
  questionUpdateHandler: UpdateType;
  currentPath: string;
}) => {
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    questionUpdateHandler({ textAnswer: inputValue });
  };
  return (
    <>
      {currentPath !== "/preview" ? (
        <input
          className="w-full my-2 py-1 border-b border-gray-300 focus:outline-none focus:border-orange-500"
          placeholder="답변 입력"
          disabled
        />
      ) : (
        <input
          className="w-full my-2 py-1 border-b border-gray-300 focus:outline-none focus:border-orange-500"
          placeholder="답변 입력"
          onChange={inputHandler}
        />
      )}
    </>
  );
};

export default ShortAnswer;
