import React from "react";
import { UpdateType } from "../../../../../type/types";

const LongAnswer = ({
  questionUpdateHandler,
  currentPath,
}: {
  questionUpdateHandler: UpdateType;
  currentPath: string;
}) => {
  const inputHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;
    questionUpdateHandler({ textAnswer: inputValue });
  };
  return (
    <>
      {currentPath !== "preview" ? (
        <textarea
          rows={7}
          cols={60}
          className="w-full my-2 py-1 border-b border-gray-300 focus:outline-none"
          placeholder="답변 입력"
          disabled
        ></textarea>
      ) : (
        <textarea
          rows={7}
          cols={60}
          className="w-full my-2 py-1 border-b border-gray-300 focus:outline-none"
          placeholder="답변 입력"
          onChange={inputHandler}
        ></textarea>
      )}
    </>
  );
};

export default LongAnswer;
