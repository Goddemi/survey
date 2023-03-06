import { useRef, useState } from "react";
import AddAnswer from "../../../../../../components/answer/AddAnswer";
import DeleteAnswer from "../../../../../../components/answer/DeleteAnswer";
import AddDropdown from "./AddDropdown";
import DropdownAnswer from "./DropdownAnswer";

const Dropdown = () => {
  const [answers, setAnswers] = useState([{ id: "firstAnswer", content: "" }]);
  const answerRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      {answers.map((ele) => {
        return (
          <div className="flex justify-between items-center my-2" key={ele.id}>
            <DropdownAnswer
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

      <AddDropdown answers={answers} setAnswers={setAnswers} />
    </div>
  );
};

export default Dropdown;
