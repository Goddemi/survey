import React from "react";
import { ModifiedAnswerType } from "../../type/types";

const ShortAnswer = ({
  contentHandler,
}: {
  contentHandler: (ele: ModifiedAnswerType) => void;
}) => {
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    contentHandler({ textAnswer: inputValue });
  };
  return (
    <input
      className="w-full my-2 py-1 border-b border-gray-300 focus:outline-none focus:border-orange-500"
      placeholder="답변 입력"
      onChange={inputHandler}
    />
  );
};

export default ShortAnswer;
