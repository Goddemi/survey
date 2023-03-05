import { Radio } from "@mui/material";
import { AnswerType } from "../../type/answerType";
import { addAnswerHandler } from "./func/addAnswerHandler";

interface Props extends AnswerType {
  answerRef: React.RefObject<HTMLInputElement>;
}

const AddAnswer = ({ answers, setAnswers, answerRef }: Props) => {
  return (
    <div
      className="flex items-center my-2"
      onClick={() => addAnswerHandler(answers, setAnswers, answerRef)}
    >
      <Radio disabled />
      <input
        className="w-full p-2 focus:outline-none cursor-pointer disabled:bg-white"
        placeholder="옵션 추가"
        disabled
      />
    </div>
  );
};

export default AddAnswer;
