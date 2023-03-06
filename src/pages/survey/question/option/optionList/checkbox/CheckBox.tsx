import { useRef, useState } from "react";
import DeleteAnswer from "../../../../../../components/answer/DeleteAnswer";
import AddCheckAnswer from "./AddCheckAnswer";
import CheckAnswer from "./CheckAnswer";
import { ModifiedAnswerType } from "../../../type/types";

const CheckBox = ({
  contentHandler,
}: {
  contentHandler: (ele: ModifiedAnswerType) => void;
}) => {
  const [answers, setAnswers] = useState([{ id: "firstAnswer", content: "" }]);
  const answerRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      {answers.map((ele) => {
        return (
          <div className="flex justify-between items-center my-2" key={ele.id}>
            <CheckAnswer
              answers={answers}
              setAnswers={setAnswers}
              answerRef={answerRef}
            />
            <DeleteAnswer
              elementId={ele.id}
              answers={answers}
              setAnswers={setAnswers}
            />
          </div>
        );
      })}

      <AddCheckAnswer answers={answers} setAnswers={setAnswers} />
    </div>
  );
};

export default CheckBox;
