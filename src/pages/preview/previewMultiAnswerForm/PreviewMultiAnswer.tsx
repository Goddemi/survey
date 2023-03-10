import CheckBoxAnswer from "./optionList/CheckboxAnswer";
import RadioAnswer from "./optionList/RadioAnswer";
import DropdownAnswer from "./optionList/DropdownAnswer";
import { UpdateType, AnswerType } from "../../../type/types";

const PreMultipleAnswer = ({
  option,
  multiAnswerList,
  questionUpdateHandler,
}: {
  option: string;
  multiAnswerList: AnswerType[];
  questionUpdateHandler: UpdateType;
}) => {
  return (
    <>
      {option === "checkbox" &&
        multiAnswerList.map((ele: AnswerType) => {
          const { id, content } = ele;
          return (
            <div key={id} className="flex justify-between items-center my-2">
              <CheckBoxAnswer
                answerId={id}
                answerContent={content}
                multiAnswerList={multiAnswerList}
                questionUpdateHandler={questionUpdateHandler}
              />
            </div>
          );
        })}

      {option === "multiple" &&
        multiAnswerList.map((ele: AnswerType) => {
          const { id, content } = ele;
          return (
            <div key={id} className="flex justify-between items-center my-2">
              <RadioAnswer
                answerId={id}
                answerContent={content}
                multiAnswerList={multiAnswerList}
                questionUpdateHandler={questionUpdateHandler}
              />
            </div>
          );
        })}

      {option === "dropdown" && (
        <DropdownAnswer
          multiAnswerList={multiAnswerList}
          questionUpdateHandler={questionUpdateHandler}
        />
      )}
    </>
  );
};

export default PreMultipleAnswer;
