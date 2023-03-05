import { Checkbox } from "@mui/material";
import { AnswerType } from "../../type/answerType";
import { addAnswerHandler } from "../multipleAnswer/func/addAnswerHandler";

const AddCheckAnswer = ({ answers, setAnswers }: AnswerType) => {
  return (
    <div
      className="flex items-center my-2"
      onClick={() => addAnswerHandler(answers, setAnswers)}
    >
      <Checkbox disabled />
      <input
        className="w-full p-2 focus:outline-none cursor-pointer disabled:bg-white"
        placeholder="옵션 추가"
        disabled
      />
    </div>
  );
};

export default AddCheckAnswer;
