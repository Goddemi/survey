import { useRef, useState } from "react";
import DeleteAnswer from "../multipleAnswer/DeleteAnswer";
import AddCheckAnswer from "./AddCheckAnswer";
import CheckAnswer from "./CheckAnswer";

const CheckBox = () => {
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
