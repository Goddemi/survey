import React from "react";

const LongAnswer = () => {
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
