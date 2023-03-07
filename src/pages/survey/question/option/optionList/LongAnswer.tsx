import React from "react";
import { ModifiedAnswerType } from "../../type/types";

const LongAnswer = ({
  contentHandler,
}: {
  contentHandler: (ele: ModifiedAnswerType) => void;
}) => {
  const inputHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;
    contentHandler({ textAnswer: inputValue });
  };
  return (
    <textarea
      rows={7}
      cols={60}
      className="focus:outline-none"
      placeholder="답변 입력"
      onChange={inputHandler}
    ></textarea>
  );
};

export default LongAnswer;
