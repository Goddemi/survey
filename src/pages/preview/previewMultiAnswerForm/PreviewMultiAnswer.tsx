import { useSelector } from "react-redux";
import CheckBoxAnswer from "./optionList/CheckboxAnswer";
import RadioAnswer from "./optionList/RadioAnswer";
import DropdownAnswer from "./optionList/DropdownAnswer";
import { UpdateType, AnswerType } from "../../../type/types";

import { RootState } from "../../../store/store";

const PreMultipleAnswer = ({
  questionId,
  selectedOption,
  questionUpdateHandler,
}: {
  questionId: string;
  selectedOption: string;
  questionUpdateHandler: UpdateType;
}) => {
  const questionList = useSelector(
    (state: RootState) => state.questionList.list
  );
  const answerList = questionList.filter(
    (question) => question.id === questionId
  )[0].multiAnswer;

  return (
    <>
      {selectedOption === "checkbox" &&
        answerList.map((ele: AnswerType) => {
          const { id, content } = ele;
          return (
            <div key={id} className="flex justify-between items-center my-2">
              <CheckBoxAnswer
                answerId={id}
                answerContent={content}
                answerList={answerList}
                questionUpdateHandler={questionUpdateHandler}
              />
            </div>
          );
        })}

      {selectedOption === "multiple" &&
        answerList.map((ele: AnswerType) => {
          const { id, content } = ele;
          return (
            <div key={id} className="flex justify-between items-center my-2">
              <RadioAnswer
                answerId={id}
                answerContent={content}
                answerList={answerList}
                questionUpdateHandler={questionUpdateHandler}
              />
            </div>
          );
        })}

      {selectedOption === "dropdown" && (
        <DropdownAnswer
          answerList={answerList}
          questionUpdateHandler={questionUpdateHandler}
        />
      )}
    </>
  );
};

export default PreMultipleAnswer;
