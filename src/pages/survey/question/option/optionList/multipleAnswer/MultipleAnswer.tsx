import { useRef } from "react";
import { useSelector } from "react-redux";
import AddAnswer from "../../../../../../components/answer/AddAnswer";
import Answer from "../../../../../../components/answer/Answer";
import DeleteAnswer from "../../../../../../components/answer/DeleteAnswer";
import { RootState } from "../../../../../../store/store";
import { AnswerType } from "../../type/answerType";
import { UpdateType } from "../../../type/types";

const MultipleAnswer = ({
  questionId,
  selectedOption,
  questionUpdateHandler,
}: {
  questionId: string;
  selectedOption: string;
  questionUpdateHandler: UpdateType;
}) => {
  const answerRef = useRef<HTMLInputElement>(null);

  const questionList = useSelector(
    (state: RootState) => state.questionList.list
  );
  const answerList = questionList.filter(
    (question) => question.id === questionId
  )[0].multiAnswer;

  const addAnswerToList = () => {
    const newId = new Date().getTime().toString();
    questionUpdateHandler({
      multiAnswer: [...answerList, { id: newId, content: "" }],
    });
  };

  return (
    <div>
      {answerList.map((ele: AnswerType) => {
        return (
          <div className="flex justify-between items-center my-2" key={ele.id}>
            <Answer
              answerId={ele.id}
              answerList={answerList}
              answerRef={answerRef}
              selectedOption={selectedOption}
              questionUpdateHandler={questionUpdateHandler}
              addAnswerToList={addAnswerToList}
              answerContent={ele.content}
            />
            <DeleteAnswer
              elementId={ele.id}
              answerList={answerList}
              questionUpdateHandler={questionUpdateHandler}
            />
          </div>
        );
      })}

      <AddAnswer addAnswerToList={addAnswerToList} />
    </div>
  );
};

export default MultipleAnswer;
