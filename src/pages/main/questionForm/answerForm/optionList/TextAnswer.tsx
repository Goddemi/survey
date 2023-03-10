import { useEffect } from "react";
import { UpdateType } from "../../../../../type/types";

const TextAnswer = ({
  currentPath,
  option,
  questionUpdateHandler,
}: {
  option: string;
  questionUpdateHandler: UpdateType;
  currentPath: string;
}) => {
  const inputHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const inputValue = event.target.value;
    questionUpdateHandler({ textAnswer: inputValue });
  };

  useEffect(() => {
    questionUpdateHandler({ textAnswer: "" });
  }, []);

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
