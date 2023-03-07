import { Radio } from "@mui/material";
import { addAnswerToList } from "./func/addAnswerHandler";
import { SetAnswerType } from "../../pages/survey/question/option/type/answerType";
const AddAnswer = ({ setAnswerList }: SetAnswerType) => {
  return (
    <div
      className="flex items-center my-2"
      onClick={() => addAnswerToList(setAnswerList)}
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
