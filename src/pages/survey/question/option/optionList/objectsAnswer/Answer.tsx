import { Radio } from "@mui/material";
import { useState } from "react";
import { addAnswerHandler } from "./func/addAnswerHandler";
import { AnswerType } from "../../type/answerType";

interface Props extends AnswerType {
  answerRef: React.RefObject<HTMLInputElement>;
}

const Answer = ({ answers, setAnswers, answerRef }: Props) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addAnswerHandler(answers, setAnswers, answerRef);
    }
  };

  return (
    <div className="flex items-center" onKeyDown={handleKeyDown}>
      <Radio
        checked={selectedValue === "noCheckInMaking"}
        onChange={handleChange}
        value={inputValue}
        name="radio-buttons"
      />
      <input
        className="w-[700px] p-2 focus:border-b-2 focus:outline-none"
        placeholder="답변 입력"
        onChange={handleInput}
        value={inputValue}
        ref={answerRef}
      />
    </div>
  );
};

export default Answer;
