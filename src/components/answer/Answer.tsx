import { Radio } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { addAnswerToList } from "./func/addAnswerHandler";
import { SetAnswerType } from "../../pages/survey/question/option/type/answerType";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { ModifiedAnswerType } from "../../pages/survey/question/type/types";
import { AnswerType } from "../../pages/survey/question/option/type/answerType";
interface Props extends SetAnswerType {
  answerId: string;
  answerList: AnswerType[];
  answerRef: React.RefObject<HTMLInputElement>;
  contentHandler: (ele: ModifiedAnswerType) => void;
}

const Answer = ({
  answerId,
  answerList,
  setAnswerList,
  answerRef,
  contentHandler,
}: Props) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const saveBtn = useSelector((state: RootState) => state.savebutton.value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleContent = useCallback(() => {
    setAnswerList((prevAnswerList) => {
      const newAnswerList = prevAnswerList.map((answer) =>
        answer.id === answerId ? { ...answer, content: inputValue } : answer
      );
      return newAnswerList;
    });
  }, [saveBtn]);

  const setContent = useCallback(() => {
    const newMultiAnswer = { multiAnswer: answerList };
    console.log("new", newMultiAnswer);
    contentHandler(newMultiAnswer);
  }, [saveBtn]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addAnswerToList(setAnswerList);
    }
  };

  useEffect(() => {
    handleContent();
    setContent();
    if (answerRef.current !== null) answerRef.current.focus();
  }, [saveBtn, answerRef]);

  useEffect(() => {}, []);

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
