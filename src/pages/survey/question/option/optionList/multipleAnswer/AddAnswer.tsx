import { Radio } from "@mui/material";
import { AnswerType } from "../../type/answerType";
import { addAnswerHandler } from "./func/addAnswerHandler";

const AddAnswer = ({ answers, setAnswers }: AnswerType) => {
  return (
    <div
      className="flex items-center my-2"
      onClick={() => addAnswerHandler(answers, setAnswers)}
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
