import { UpdateType } from "../../../../../type/types";

const TextAnswer = ({
  currentPath,
  option,
  questionUpdateHandler,
  setEssentialSatisFied,
}: {
  option: string;
  questionUpdateHandler: UpdateType;
  currentPath: string;
  setEssentialSatisFied: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const inputHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const inputValue = event.target.value;
    questionUpdateHandler({ textAnswer: inputValue });
  };
  return (
    <>
      {option === "short" ? (
        <input
          className="w-full my-2 py-1 border-b border-gray-300 focus:outline-none focus:border-orange-500"
          placeholder="답변 입력"
          disabled={currentPath !== "/preview" ? true : false}
          onChange={inputHandler}
        />
      ) : (
        <textarea
          rows={7}
          cols={60}
          className="w-full my-2 py-1 border-b border-gray-300 focus:outline-none"
          placeholder="답변 입력"
          disabled={currentPath !== "/preview" ? true : false}
          onChange={inputHandler}
        ></textarea>
      )}
    </>
  );
};

export default TextAnswer;
