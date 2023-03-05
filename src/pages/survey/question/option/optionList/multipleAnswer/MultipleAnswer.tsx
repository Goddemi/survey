import { useRef, useState } from "react";
import AddAnswer from "./AddAnswer";
import Answer from "./Answer";
import DeleteAnswer from "./DeleteAnswer";

const MultipleAnswer = () => {
  const [answers, setAnswers] = useState([{ id: "firstAnswer", content: "" }]);
  const answerRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      {answers.map((ele) => {
        return (
          <div className="flex justify-between items-center my-2" key={ele.id}>
            <Answer
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

      <AddAnswer answers={answers} setAnswers={setAnswers} />
    </div>
  );
};

export default MultipleAnswer;
