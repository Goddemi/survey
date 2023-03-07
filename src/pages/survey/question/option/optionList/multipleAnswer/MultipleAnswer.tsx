import { useRef, useState } from "react";
import AddAnswer from "../../../../../../components/answer/AddAnswer";
import Answer from "../../../../../../components/answer/Answer";
import DeleteAnswer from "../../../../../../components/answer/DeleteAnswer";

import { ModifiedAnswerType } from "../../../type/types";

const MultipleAnswer = ({
  contentHandler,
}: {
  contentHandler: (ele: ModifiedAnswerType) => void;
}) => {
  const [answerList, setAnswerList] = useState([
    { id: "firstAnswer", content: "" },
  ]);
  const answerRef = useRef<HTMLInputElement>(null);
  console.log(answerList);

  return (
    <div>
      {answerList.map((ele) => {
        return (
          <div className="flex justify-between items-center my-2" key={ele.id}>
            <Answer
              answerId={ele.id}
              answerList={answerList}
              setAnswerList={setAnswerList}
              answerRef={answerRef}
              contentHandler={contentHandler}
            />
            <DeleteAnswer
              elementId={ele.id}
              answerList={answerList}
              setAnswerList={setAnswerList}
            />
          </div>
        );
      })}

      <AddAnswer setAnswerList={setAnswerList} />
    </div>
  );
};

export default MultipleAnswer;
// setQuestionContent((prevState) => ({ ...prevState, ...ele }));
//ele 의 형식은 {mulitAnswer : [{}, {}]}

// contentHandler()
//answer가 추가되고, 추가될 때마다 contentHandler에 추가되는 것.
