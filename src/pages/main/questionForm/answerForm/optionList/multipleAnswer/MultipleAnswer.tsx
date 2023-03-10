import { useRef } from "react";
import AddAnswer from "./components/AddAnswer";
import AnswerInput from "./components/AnswerInput";
import DeleteAnswer from "./components/DeleteAnswer";
import { Checkbox } from "@mui/material";
import { RadioButtonChecked, RadioButtonUnchecked } from "@mui/icons-material";
import { AnswerType, UpdateType } from "../../../../../../type/types";

const MultipleAnswer = ({
  option,
  multiAnswerList,
  questionUpdateHandler,
}: {
  option: string;
  multiAnswerList: AnswerType[];
  questionUpdateHandler: UpdateType;
}) => {
  const answerRef = useRef<HTMLInputElement>(null);

  const addAnswerToList = () => {
    const newId = new Date().getTime().toString();
    questionUpdateHandler({
      multiAnswer: [
        ...multiAnswerList,
        { id: newId, content: "", checked: false },
      ],
    });
  };

  return (
    <div>
      {multiAnswerList.map((answer: AnswerType) => {
        const { id, content } = answer;
        return (
          <div className="flex justify-between items-center my-2" key={id}>
            <div className="flex items-center">
              {option === "multiple" && (
                <Checkbox
                  icon={<RadioButtonUnchecked />}
                  checkedIcon={<RadioButtonChecked />}
                  disabled
                />
              )}
              {option === "checkbox" && <Checkbox disabled />}
              {option === "dropdown" && <span>-</span>}

              <AnswerInput
                answerId={id}
                answerContent={content}
                multiAnswerList={multiAnswerList}
                answerRef={answerRef}
                questionUpdateHandler={questionUpdateHandler}
                addAnswerToList={addAnswerToList}
              />
            </div>

            <DeleteAnswer
              elementId={id}
              multiAnswerList={multiAnswerList}
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
