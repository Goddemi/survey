import React from "react";
import { UpdateType } from "../../type/types";

const LongAnswer = ({
  questionUpdateHandler,
}: {
  questionUpdateHandler: UpdateType;
}) => {
  const inputHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;
    questionUpdateHandler({ textAnswer: inputValue });
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
