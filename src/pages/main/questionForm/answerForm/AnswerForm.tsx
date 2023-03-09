import ShortAnswer from "./optionList/ShortAnswer";
import LongAnswer from "./optionList/LongAnswer";
import MultipleAnswer from "./optionList/multipleAnswer/MultipleAnswer";
import PreMultipleAnswer from "../../../preview/previewMultiAnswerForm/PreviewMultiAnswer";
import { UpdateType, OptionType } from "../../../../type/types";

const AnswerForm = ({
  currentPath,
  questionUpdateHandler,
  selectedOption,
  questionId,
}: {
  currentPath: string;
  questionUpdateHandler: UpdateType;
  selectedOption: OptionType;
  questionId: string;
}) => {
  return (
    <div>
      {selectedOption === "short" && (
        <ShortAnswer
          questionUpdateHandler={questionUpdateHandler}
          currentPath={currentPath}
        />
      )}
      {selectedOption === "long" && (
        <LongAnswer
          questionUpdateHandler={questionUpdateHandler}
          currentPath={currentPath}
        />
      )}
      {(selectedOption === "multiple" ||
        selectedOption === "checkbox" ||
        selectedOption === "dropdown") &&
        (currentPath !== "/preview" ? (
          <MultipleAnswer
            questionId={questionId}
            selectedOption={selectedOption}
            questionUpdateHandler={questionUpdateHandler}
          />
        ) : (
          <PreMultipleAnswer
            questionId={questionId}
            selectedOption={selectedOption}
            questionUpdateHandler={questionUpdateHandler}
          />
        ))}
    </div>
  );
};

export default AnswerForm;
