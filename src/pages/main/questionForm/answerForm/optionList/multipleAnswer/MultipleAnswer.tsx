import { useRef } from "react";
import { useSelector } from "react-redux";
import AddAnswer from "./components/AddAnswer";
import AnswerInput from "./components/AnswerInput";
import DeleteAnswer from "./components/DeleteAnswer";
import { Checkbox } from "@mui/material";
import { RadioButtonChecked, RadioButtonUnchecked } from "@mui/icons-material";
import { RootState } from "../../../../../../store/store";
import { AnswerType, UpdateType } from "../../../../../../type/types";

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
      {answerList.map((answer: AnswerType) => {
        const { id, content } = answer;
        return (
          <div className="flex justify-between items-center my-2" key={id}>
            <div className="flex items-center">
              {selectedOption === "multiple" && (
                <Checkbox
                  icon={<RadioButtonUnchecked />}
                  checkedIcon={<RadioButtonChecked />}
                  disabled
                />
              )}
              {selectedOption === "checkbox" && <Checkbox disabled />}
              {selectedOption === "dropdown" && <span>-</span>}
              <AnswerInput
                answerId={id}
                answerContent={content}
                answerList={answerList}
                answerRef={answerRef}
                questionUpdateHandler={questionUpdateHandler}
                addAnswerToList={addAnswerToList}
              />
            </div>

            <DeleteAnswer
              elementId={id}
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
