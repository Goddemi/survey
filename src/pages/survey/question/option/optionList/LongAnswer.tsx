import React from "react";
import { ModifiedAnswerType } from "../../type/types";

const LongAnswer = ({
  contentHandler,
}: {
  contentHandler: (ele: ModifiedAnswerType) => void;
}) => {
  return (
    <textarea
      rows={7}
      cols={60}
      className="focus:outline-none"
      placeholder="답변 입력"
    ></textarea>
  );
};

export default LongAnswer;
