import { Checkbox, Radio } from "@mui/material";
import { useEffect, useState } from "react";
import { UpdateType } from "../../pages/main/question/type/types";
import { AnswerType } from "../../pages/main/question/option/type/answerType";

interface Props {
  answerId: string;
  answerList: AnswerType[];
  answerRef: React.RefObject<HTMLInputElement>;
  selectedOption: string;
  questionUpdateHandler: UpdateType;
  addAnswerToList: () => void;
  answerContent: any;
}

const Answer = ({
  answerId,
  answerList,
  answerRef,
  selectedOption,
  questionUpdateHandler,
  addAnswerToList,
  answerContent,
}: Props) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [inputValue, setInputValue] = useState(answerContent);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    const newAnswerList = answerList.map((answer) =>
      answerId === answer.id ? { ...answer, content: inputValue } : answer
    );
    questionUpdateHandler({ multiAnswer: newAnswerList });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addAnswerToList();
    }
  };

  useEffect(() => {
    if (answerRef.current !== null) answerRef.current.focus();
  }, [answerRef]);

  return (
    <div className="flex items-center" onKeyDown={handleKeyDown}>
      {selectedOption === "checkbox" && <Checkbox disabled />}
      {selectedOption === "dropdown" && <span>-</span>}
      {selectedOption === "multiple" && (
        <Radio
          checked={selectedValue === "noCheckInMaking"}
          onChange={handleChange}
          value={inputValue}
          name="radio-buttons"
        />
      )}

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
